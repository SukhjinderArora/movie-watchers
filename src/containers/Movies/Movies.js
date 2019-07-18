import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import * as moviesAction from '../../store/actions/moviesAction';
import Grid from '../../components/UI/Grid/Grid';
import Spinner from '../../components/UI/Spinner/Spinner';

class Movies extends Component {
  state = {
    hasMore: true,
  };

  loadData = () => {
    this.setState({
      hasMore: this.props.data.page <= this.props.data.total_pages,
    });
    switch(this.props.type) {
      case 'popularMovies':
        this.props.getPopularMovies();
        break;
      case 'topRatedMovies':
        this.props.getTopRatedMovies();
        break;
      case 'upcomingMovies':
        this.props.getUpcomingMovies();
        break;
      case 'nowPlayingMovies':
        this.props.getNowPlayingMovies();
        break;
      default:
        return;
    }
  };

  handleScroll = () => {
    const {
      state: {
        hasMore
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
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.debouncedFunction);
    this.loadData();
  }

  componentWillUnmount() {
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

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.movies[ownProps.type]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularMovies: () => dispatch(moviesAction.getPopularMovies()),
    getTopRatedMovies: () => dispatch(moviesAction.getTopRatedMovies()),
    getUpcomingMovies: () => dispatch(moviesAction.getUpcomingMovies()),
    getNowPlayingMovies: () => dispatch(moviesAction.getNowPlayingMovies())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
