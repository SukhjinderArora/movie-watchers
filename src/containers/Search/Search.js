import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import queryString from 'query-string';

import { getSearchResults, clearSearchResults } from '../../store/actions/searchAction';
import Grid from '../../components/UI/Grid/Grid';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Search.module.css';

class Search extends Component {

  state = {
    error: false,
    hasMore: true,
    isLoading: false,
  };

  loadData = () => {
    const { query } = queryString.parse(this.props.location.search);
    this.props.search(query);
    this.setState({
      hasMore: this.props.searchResults.page <= this.props.searchResults.total_pages
    });
  };

  handleScroll = () => {
    const {
      state: {
        error,
        hasMore,
        isLoading
      }
    } = this;

    if (error || !hasMore || isLoading) return;

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      // Do awesome stuff like loading more content!
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
    // this.loadData();
  }

  componentWillUnmount() {
    // you need to unbind the same listener that was binded.
    window.removeEventListener('scroll', this.debouncedFunction, false);
  }

  render() {
    const { searchResults } = this.props;
    let component;
    if (searchResults.results.length === 0 && this.props.error === '') {
      component = <Spinner />;
    } else if (this.props.error) {
      component = <h1 className={classes.Error}>{this.props.error}</h1>;
    } else {
      component = <Grid data={searchResults.results} />;
    }

    return (
      <div className={classes.SearchContainer}>
        {component}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults,
    error: state.search.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (query) => dispatch(getSearchResults(query)),
    clearSearch: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);