import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import * as moviesAction from '../../store/actions/moviesAction';
import Grid from '../../components/UI/Grid/Grid';
import Spinner from '../../components/UI/Spinner/Spinner';


class TopRatedMovies extends Component {

  state = {
    error: false,
    hasMore: true,
    isLoading: false,
  };

  loadData = () => {
    this.props.getTopRatedMovies();
    this.setState({
      hasMore: this.props.data.page <= this.props.data.total_pages
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

    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)){
      // if((window.scrollY + window.innerHeight) === document.body.)
    // if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      // Do awesome stuff like loading more content!
      this.loadData();
    }
  }

  constructor(props) {
    super(props);
    this.debouncedFunction = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.debouncedFunction);
    this.loadData();
  }

  componentWillUnmount() {
    // you need to unbind the same listener that was binded.
    window.removeEventListener('scroll', this.debouncedFunction, false);
  }

  render() {
    const { data } = this.props;
    if (data.results.length === 0) return <Spinner />;
    return (
      <div>
        <Grid data={data.results} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies.topRatedMovies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopRatedMovies: () => dispatch(moviesAction.getTopRatedMovies())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);
