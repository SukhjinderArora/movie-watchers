import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import queryString from 'query-string';

import { getSearchResults, clearSearchResults } from '../../store/actions/searchAction';
import Grid from '../UI/Grid/Grid';
import Spinner from '../UI/Spinner/Spinner';
import SearchForm from '../Navigation/SearchForm/SearchForm';
import classes from './Search.module.css';

class Search extends Component {

  state = {
    hasMore: true,
  };

  onCardClickHandler = (path) => {
    this.props.history.push(path);
  };

  loadData = () => {
    const { query } = queryString.parse(this.props.location.search);
    if(query) {
      this.props.search(query);
      this.setState({
        hasMore: this.props.searchResults.page <= this.props.searchResults.total_pages
      });
    }
  };

  handleScroll = () => {
    const {
      state: {
        hasMore,
      }
    } = this;

    if (!hasMore) return;

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      this.loadData();
    }
  }

  constructor(props) {
    super(props);
    this.debouncedFunction = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.debouncedFunction);
    this.props.clearSearch()
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      window.scrollTo(0, 0);
      this.props.clearSearch();
      this.loadData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedFunction, false);
  }


  render() {
    const { searchResults } = this.props;
    const { query } = queryString.parse(this.props.location.search);
    let components;
    if (!query || query.trim() === '') {
      components = null;
    } else if (searchResults.results.length === 0 && searchResults.total_results === -1) {
      components = <Spinner />;
    } else if (searchResults.results.length === 0 && searchResults.total_results === 0) {
      components = (
        <h1 className={classes.resultNotFound}>No Results Found for your search term <span>{query}</span>.</h1>
      );
    } else {
      components = (
        <>
          <h1 className={classes.title}>Search Results for <span>{query}</span>:</h1>
          <Grid data={searchResults.results} onClickHandler={this.onCardClickHandler}/>
          {this.props.searchResults.page < this.props.searchResults.total_pages ? <Spinner /> : null}
        </>
      );
    }
    return (
      <div className={classes.SearchContainer}>
        <div className={classes.SearchForm}>
          <SearchForm autoFocus />
        </div>
        {components}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (query) => dispatch(getSearchResults(query)),
    clearSearch: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);