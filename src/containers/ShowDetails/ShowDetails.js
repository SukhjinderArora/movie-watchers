import React, { Component } from 'react';
import { connect } from 'react-redux';

import { base_img_url } from '../../config';

import * as actionTypes from '../../store/actions/actionTypes';
import { getDataAsync } from '../../store/actions/dataActions';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './ShowDetails.module.css';

class ShowDetails extends Component {
  componentDidMount() {
    const path = this.props.location.pathname;
    const id = this.props.match.params.id;
    if(path.includes('/movie')) {
      console.log(path);
      this.props.getData(`/movie/${id}`, actionTypes.GET_MOVIE_DETAILS);
    } else if(path.includes('/tv')) {
      this.props.getData(`/tv/${id}`, actionTypes.GET_TV_DETAILS);
    }
  }
  render() {
    const imageUrl = base_img_url + 'w300';
    const path = this.props.location.pathname;
    const data = path.includes('/movie') ? this.props.movie : this.props.tv;
    let components;
    if(!data) {
      components = <Spinner />;
    } else {
      components = <img src={imageUrl + data.poster_path} alt="Poster" />
    }
    console.log(data)
    console.log(this.props);
    return (
      <>
        <Navbar />
        <div className={classes.Container}>
          {components}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie,
    tv: state.tv.show,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (path, actionType) => dispatch(getDataAsync(path, actionType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails);
