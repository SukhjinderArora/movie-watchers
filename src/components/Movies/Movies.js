import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import * as moviesAction from '../../store/actions/moviesAction';

import HeaderWithGenreList from '../HeaderWithGenreList/HeaderWithGenreList';
import Grid from '../UI/Grid/Grid';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Movies.module.css';

class Movies extends Component {
  state = {
    hasMore: true,
    selectedGenre: ''
  };

  onCardClickHandler = (path) => {
    this.props.history.push(path);
  };

  loadData = () => {
    this.setState({
      hasMore: this.props.data.page <= this.props.data.total_pages,
    });
    switch(this.props.type) {
      case 'popularMovies':
        this.props.getPopularMovies(this.state.selectedGenre);
        break;
      case 'topRatedMovies':
        this.props.getTopRatedMovies(this.state.selectedGenre);
        break;
      case 'upcomingMovies':
        this.props.getUpcomingMovies(this.state.selectedGenre);
        break;
      case 'nowPlayingMovies':
        this.props.getNowPlayingMovies(this.state.selectedGenre);
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

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 700)) {
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
    if(!this.props.genres) {
      this.props.getMovieGenres();
    }
    this.props.clearData();
    this.loadData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedFunction, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedGenre !== this.state.selectedGenre) {
      this.props.clearData();
      this.loadData();
    }
  }

  onSelectChangeHandler = (e) => {
    this.setState({
      selectedGenre: e.target.value
    });
  }

  render() {
    const { data } = this.props;
    const { genres } = this.props; 
    let components;
    if (data.results.length === 0 && data.total_results === -1) {
      components = <Spinner />;
    } else if (data.results.length === 0 && data.total_results === 0) {
      components = <h1 className={classes.resultNotFound}>No Results Found</h1>;
    } else {
      components = (
        <>
          <Grid data={data.results} onClickHandler={this.onCardClickHandler}/>
          {this.props.data.page < this.props.data.total_pages ? <Spinner /> : null}
        </>
      );
    }

    return (
        <div className={classes.MoviesContainer}>
          <HeaderWithGenreList 
            title={this.props.title} 
            genreList={genres} 
            selectedGenre={this.state.selectedGenre}
            onSelectChangeHandler={this.onSelectChangeHandler} />
          {components}
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.movies[ownProps.type],
    genres: state.movies.genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularMovies: (genre) => dispatch(moviesAction.getPopularMovies(genre)),
    getTopRatedMovies: (genre) => dispatch(moviesAction.getTopRatedMovies(genre)),
    getUpcomingMovies: (genre) => dispatch(moviesAction.getUpcomingMovies(genre)),
    getNowPlayingMovies: (genre) => dispatch(moviesAction.getNowPlayingMovies(genre)),
    getMovieGenres: () => dispatch(moviesAction.getMovieGenres()),
    clearData: () => dispatch(moviesAction.resetMovieData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
