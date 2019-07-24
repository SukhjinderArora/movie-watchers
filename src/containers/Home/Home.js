import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Carousel from '../../components/UI/Carousel/Carousel';
import Spinner from '../../components/UI/Spinner/Spinner';
import Card from '../../components/UI/Card/Card';
import RightArrow from '../../components/UI/Icons/RightArrow';

import placeholderImg from '../../assets/images/placeholder_img.png';

import * as moviesAction from '../../store/actions/moviesAction';
import * as tvAction from '../../store/actions/tvAction';
import { base_img_url } from '../../config';

import classes from './Home.module.css';

class Home extends Component {

  onCardClickHandler = (path) => {
    this.props.history.push(path);
  };

  transformData = (data) => {
    const imageUrl = base_img_url + 'w300/';
    const newData = data.slice(0, 19);
    return newData.map(dataItem => {
      let imageUrl;
      if (!dataItem.poster_path) {
        imageUrl = placeholderImg;
      } else {
          imageUrl = `${base_img_url}w300/${dataItem.poster_path}`;
      }
      return <Card
        imgUrl={imageUrl}
        key={dataItem.id}
        onDragStart={(e) => e.preventDefault()}
        onCardClickHandler={this.onCardClickHandler}
        data={dataItem} />
    });
  };

  componentDidMount() {
    this.props.clearMovieData();
    this.props.clearTVData();
    window.scrollTo(0, 0);
    this.props.getData();
  }

  render() {
    if(this.props.loading) return <Spinner />;
    const responsive = {
      0: { items: 3 },
      767: { items: 2 },
      1023: { items: 3 },
      1200: { items: 4 }
    };

    return (
      <div className={classes.Container}>
        <div>
          <header>
            <h2 className={classes.title}>Popular Movies</h2>
            <Link to="/movies/popular">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29"/></span>
            </Link>
          </header>
          <Carousel
            title="Popular Movies"
            data={this.transformData(this.props.popularMovies)}
            responsive={responsive} />
        </div>
        <div>
          <header>
            <h2 className={classes.title}>Popular Shows</h2>
            <Link to="/tv/popular">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel
            title="Popular Shows"
            data={this.transformData(this.props.popularTV)}
            responsive={responsive} />
        </div>
        <div>
          <header>
            <h2 className={classes.title}>Top Rated Movies</h2>
            <Link to="/movies/topRated">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel
            title="Top Rated Movies"
            data={this.transformData(this.props.topRatedMovies)}
            responsive={responsive} />
        </div>
        <div>
          <header>
            <h2 className={classes.title}>Top Rated Shows</h2>
            <Link to="/tv/topRated">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel
            title="Top Rated Shows"
            data={this.transformData(this.props.topRatedTV)}
            responsive={responsive} />
        </div>
        <div>
          <header>
            <h2 className={classes.title}>Now Playing Movies</h2>
            <Link to="/movies/nowPlaying">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel
            title="Now Playing Movies"
            data={this.transformData(this.props.nowPlayingMovies)}
            responsive={responsive} />
        </div>
        <div>
          <header>
            <h2 className={classes.title}>On The Air Shows</h2>
            <Link to="/tv/onAir">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel
            title="On The Air Shows"
            data={this.transformData(this.props.onTheAirTV)}
            responsive={responsive} />          
        </div>
        <div>
          <header>
            <h2 className={classes.title}>Upcoming Movies</h2>
            <Link to="/movies/upcoming">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel
            title="Upcoming Movies"
            data={this.transformData(this.props.upcomingMovies)}
            responsive={responsive} />
        </div>
        <div>
          <header>
            <h2 className={classes.title}>Airing Today</h2>
            <Link to="/tv/onAirToday">
              <span>See More</span>
              <span className={classes.rightArrow}><RightArrow height="15" width="15" color="#55AA29" /></span>
            </Link>
          </header>
          <Carousel 
            title="Airing Today" 
            data={this.transformData(this.props.onTheAirTodayTV)} 
            responsive={responsive}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    popularMovies: state.movies.popularMovies.results,
    topRatedMovies: state.movies.topRatedMovies.results,
    upcomingMovies: state.movies.upcomingMovies.results,
    nowPlayingMovies: state.movies.nowPlayingMovies.results,
    popularTV: state.tv.popularTV.results,
    topRatedTV: state.tv.topRatedTV.results,
    onTheAirTV: state.tv.onTheAirTV.results,
    onTheAirTodayTV: state.tv.onTheAirTodayTV.results,
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
    clearMovieData: () => dispatch(moviesAction.resetMovieData()),
    clearTVData: () => dispatch(tvAction.resetTVData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
