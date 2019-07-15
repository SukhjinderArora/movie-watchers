import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from '../../components/UI/Carousel/Carousel';
import Spinner from '../../components/UI/Spinner/Spinner';
import Card from '../../components/UI/Card/Card';

import placeholderImg from '../../assets/images/placeholder_img.png';

import * as moviesAction from '../../store/actions/moviesAction';
import * as tvAction from '../../store/actions/tvAction';
import { base_img_url } from '../../config';

import classes from './Home.module.css';

class Home extends Component {

  transformData = (data) => {
    const imageUrl = base_img_url + 'w300/';
    const newData = data.slice(0, 19);
    return newData.map(dataItem => {
      if (!dataItem.poster_path) {
        return <Card 
                  imgUrl={placeholderImg} 
                  key={dataItem.id}  
                  data={dataItem} 
                  onDragStart={(e) => e.preventDefault()}/>;
      }
      return <Card
        imgUrl={imageUrl + dataItem.poster_path}
        key={dataItem.id}
        onDragStart={(e) => e.preventDefault()}
        data={dataItem} />
    });
  };

  componentDidMount() {
    if(this.props.loading) {
      window.scrollTo(0, 0);
      this.props.getData();
    }
  }

  render() {
    if(this.props.loading) return <Spinner />;

    const responsive = {
      0: { items: 1 },
      767: { items: 2 },
      1023: { items: 3 },
      1200: { items: 4 }
    };

    return (
      <div className={classes.Container}>
        <Carousel 
          title="Popular Movies" 
          data={this.transformData(this.props.popularMovies)} 
          responsive={responsive}/>
        <Carousel
          title="Upcoming Movies"
          data={this.transformData(this.props.upcomingMovies)}
          responsive={responsive} />
        <Carousel
          title="Now Playing Movies"
          data={this.transformData(this.props.nowPlayingMovies)}
          responsive={responsive} />
        <Carousel
          title="Top Rated Movies"
          data={this.transformData(this.props.topRatedMovies)}
          responsive={responsive} />
        <Carousel
          title="Popular TV"
          data={this.transformData(this.props.popularTV)}
          responsive={responsive} />
        <Carousel 
          title="Top Rated TV" 
          data={this.transformData(this.props.topRatedTV)} 
          responsive={responsive}/>
        <Carousel 
          title="On Air TV" 
          data={this.transformData(this.props.onTheAirTV)} 
          responsive={responsive}/>
        <Carousel 
          title="On Air Today TV" 
          data={this.transformData(this.props.onTheAirTodayTV)} 
          responsive={responsive}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    popularMovies: state.movies.popularMovies.results.slice(0, 19),
    topRatedMovies: state.movies.topRatedMovies.results.slice(0, 19),
    upcomingMovies: state.movies.upcomingMovies.results.slice(0, 19),
    nowPlayingMovies: state.movies.nowPlayingMovies.results.slice(0, 19),
    popularTV: state.tv.popularTV.results.slice(0, 19),
    topRatedTV: state.tv.topRatedTV.results.slice(0, 19),
    // trending: state.trending.trending,
    onTheAirTV: state.tv.onTheAirTV.results.slice(0, 19),
    onTheAirTodayTV: state.tv.onTheAirTodayTV.results.slice(0, 19),
    loading: (state.movies.popularMovies.results.length === 0 
      ||state.movies.topRatedMovies.results.length === 0
      || state.movies.upcomingMovies.results.length === 0
      || state.movies.nowPlayingMovies.results.length === 0 
      ||state.tv.popularTV.results.length === 0 
      ||state.tv.topRatedTV.results.length === 0 
      ||state.tv.onTheAirTV.results.length === 0 
      ||state.tv.onTheAirTodayTV.results.length === 0
      )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(moviesAction.getPopularMovies());
      dispatch(moviesAction.getTopRatedMovies());
      dispatch(moviesAction.getUpcomingMovies());
      dispatch(moviesAction.getNowPlayingMovies());
      dispatch(tvAction.getPopularTV());
      dispatch(tvAction.getTopRatedTV());
      dispatch(tvAction.getOnTheAirTV());
      dispatch(tvAction.getOnTheAirTodayTV());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
