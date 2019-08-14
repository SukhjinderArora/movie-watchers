import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieDetails, resetMovieData } from '../../../store/actions/moviesAction';
import { currencyFormatter } from '../../../utils/utils';

import MediaInfo from '../../MediaInfo/MediaInfo';
import Spinner from '../../UI/Spinner/Spinner';

class MovieInfo extends Component {
  getMovie = () => {
    this.props.clearPrevMovie();
    const movieId = this.props.match.params.id;
    this.props.getMovieDetails(movieId);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getMovie();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      this.getMovie();
    }
  }

  onCardClickHandler = (path) => {
    this.props.history.push(path);
  };

  render() {
    if (!this.props.movie) return <Spinner />;
    const { movie } = this.props;
    let movieTrailer = movie.videos.results.filter(result => result.type === 'Trailer');
    if(movieTrailer.length === 0) {
      movieTrailer = movie.videos.results.filter(result => result.type === 'Teaser');
      if(movieTrailer.length === 0) {
        movieTrailer = movie.videos.results;
      }
    }
    const movieData = {
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      cast: movie.credits.cast,
      videoKey: movieTrailer[0] ? movieTrailer[0].key : null,
      recommendations: movie.recommendations.results,
      reviews: movie.reviews.results,
      other: [
        { name: 'Tagline', value: movie.tagline },
        { name: 'Genre', value: movie.genres.map(genre => genre.name).join(', ') },
        { name: 'Rating', value: movie.vote_average + '/10' },
        { name: 'Release Date', value: movie.release_date },
        { name: 'Runtime', value: `${movie.runtime} (mins)` },
        { name: 'Budget', value: currencyFormatter.format(movie.budget) },
        { name: 'Revenue', value: currencyFormatter.format(movie.revenue) },
        { name: 'Production Companies', value: movie.production_companies.map(company => company.name).join(', ') },
        { name: 'Status', value: movie.status }
      ]
    };

    return <MediaInfo data={movieData} onCardClickHandler={this.onCardClickHandler} />;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
    clearPrevMovie: () => dispatch(resetMovieData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
