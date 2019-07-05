import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/UI/Carousel/Carousel';
import Spinner from '../../components/UI/Spinner/Spinner';

import withData from '../../hoc/withData';

import * as actionTypes from '../../store/actions/actionTypes';
import { getDataAsync } from '../../store/actions/dataActions';

import classes from './Layout.module.css';

class Layout extends Component {

  componentDidMount() {
    this.props.getData('/movie/popular', actionTypes.GET_POPULAR_MOVIES);
    this.props.getData('/movie/top_rated', actionTypes.GET_TOP_RATED_MOVIES);
    this.props.getData('/tv/popular', actionTypes.GET_POPULAR_TV);
    this.props.getData('/tv/top_rated', actionTypes.GET_TOP_RATED_TV);
    this.props.getData('/trending/all/week', actionTypes.GET_TRENDING);
  }

  render() {
    const PopularMovies = withData(Carousel, {
      title: 'Popular Movies',
      data: this.props.popularMovies
    });
    const TopRatedMovies = withData(Carousel, {
      title: 'Top Rated Movies',
      data: this.props.topRatedMovies
    });
    const PopularTV = withData(Carousel, {
      title: 'Popular TV',
      data: this.props.popularTV
    });
    const TopRatedTV = withData(Carousel, {
      title: 'Top Rated TV',
      data: this.props.topRatedTV
    });
    const Trending = withData(Carousel, {
      title: 'Trending this Week',
      data: this.props.trending
    })

    let component;

    if(this.props.loading) {
      component = <Spinner />;
    } else {
      component = (
        <>
          <PopularMovies />
          <PopularTV />
          <Trending />
          <TopRatedMovies />
          <TopRatedTV />
        </>
      );
    }

    return (
      <>
        <Navbar />
        <div className={classes.Container}>
          {component}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    popularMovies: state.movies.popularMovies,
    topRatedMovies: state.movies.topRatedMovies,
    popularTV: state.tv.popularTV,
    topRatedTV: state.tv.topRatedTV,
    trending: state.trending.trending,
    loading: !(state.movies.popularMovies 
      && state.movies.topRatedMovies 
      && state.tv.popularTV 
      && state.tv.topRatedTV
      && state.trending.trending)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (path, actionType) => dispatch(getDataAsync(path, actionType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
