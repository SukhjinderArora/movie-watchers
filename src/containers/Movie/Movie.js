import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import { getDataAsync, clearData } from '../../store/actions/dataActions';
import { currencyFormatter } from '../../utils/utils';

import MediaInfo from '../../components/MediaInfo/MediaInfo';
import Spinner from '../../components/UI/Spinner/Spinner';

class Movie extends Component {
  getMovie = () => {
    this.props.clearData(actionTypes.CLEAR_MOVIE_DATA);
    const movieId = this.props.match.params.id;
    this.props.getData(
      `/movie/${movieId}`, 
      actionTypes.GET_MOVIE_DETAILS, 
      '&append_to_response=credits,videos,recommendations'
    );
  };

  componentDidMount() {
    this.getMovie();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getMovie();
    }
  }

  render() {
    if(!this.props.movie) return <Spinner />;
    const { movie } = this.props;
    const movieData = {
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      cast: movie.credits.cast,
      videoPath: ` https://www.youtube.com/embed/${movie.videos.results[0].key}`,
      recommendations: movie.recommendations.results,
      other: [
        { name: 'Tagline', value: movie.tagline },
        { name: 'Genre', value: movie.genres.map(genre => genre.name).join(', ') },
        { name: 'Rating', value: movie.vote_average + '/10' },
        { name: 'Release Date', value: movie.release_date },
        { name: 'Runtime', value: movie.runtime },
        { name: 'Budget', value: currencyFormatter.format(movie.budget) },
        { name: 'Revenue', value: currencyFormatter.format(movie.revenue) },
        { name: 'Production Companies', value: movie.production_companies.map(company => company.name).join(', ') },
        { name: 'Status', value: movie.status }
      ]
    };

    return <MediaInfo data={movieData}/>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (path, actionType, appendToResponse) => dispatch(getDataAsync(path, actionType, appendToResponse)),
    clearData: (actionType) => dispatch(clearData(actionType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
