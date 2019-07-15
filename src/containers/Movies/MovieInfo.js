import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieDetails } from '../../store/actions/moviesAction';
import { currencyFormatter } from '../../utils/utils';

import MediaInfo from '../../components/MediaInfo/MediaInfo';
import Spinner from '../../components/UI/Spinner/Spinner';

class MovieInfo extends Component {
  getMovie = () => {
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

  render() {
    if (!this.props.movie) return <Spinner />;
    const { movie } = this.props;
    const movieData = {
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      cast: movie.credits.cast,
      videoKey: movie.videos.results[0] ? movie.videos.results[0].key : null,
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

    return <MediaInfo data={movieData} />;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
