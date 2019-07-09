import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from '../../components/UI/Carousel/Carousel';
import Spinner from '../../components/UI/Spinner/Spinner';
import Card from '../../components/UI/Card/Card';

import { base_img_url } from '../../config';

import classes from './Home.module.css';

class Home extends Component {

  transformData = (data) => {
    const imageUrl = base_img_url + 'w300/';
    return data.map(dataItem => {
      return <Card
        imgUrl={imageUrl + dataItem.poster_path}
        key={dataItem.id}
        onDragStart={(e) => e.preventDefault()}
        data={dataItem} />
    });
  };

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
          title="Popular TV"
          data={this.transformData(this.props.popularTV)}
          responsive={responsive} />
        <Carousel
          title="Trending this Week"
          data={this.transformData(this.props.trending)}
          responsive={responsive} />
        <Carousel 
          title="Top Rated Movies" 
          data={this.transformData(this.props.topRatedMovies)} 
          responsive={responsive}/>
        <Carousel 
          title="Top Rated TV" 
          data={this.transformData(this.props.topRatedTV)} 
          responsive={responsive}/>
        </div>
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

export default connect(mapStateToProps)(Home);
