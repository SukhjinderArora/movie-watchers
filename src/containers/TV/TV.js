import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import { getDataAsync, clearData } from '../../store/actions/dataActions';

import MediaInfo from '../../components/MediaInfo/MediaInfo';
import Spinner from '../../components/UI/Spinner/Spinner';

class TV extends Component {
  getTVShow = () => {
    this.props.clearData(actionTypes.CLEAR_TV_DATA);
    const tvId = this.props.match.params.id;
    this.props.getData(
      `/tv/${tvId}`,
      actionTypes.GET_TV_DETAILS,
      '&append_to_response=credits,videos,recommendations'
    );
  };

  componentDidMount() {
    this.getTVShow();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getTVShow();
    }
  }

  render() {
    if (!this.props.tv) return <Spinner />;
    const { tv } = this.props;
    const tvData = {
      title: tv.name,
      overview: tv.overview,
      posterPath: tv.poster_path,
      cast: tv.credits.cast,
      videoPath: ` https://www.youtube.com/embed/${tv.videos.results[0].key}`,
      recommendations: tv.recommendations.results,
      other: [
        { name: 'Tagline', value: tv.tagline },
        { name: 'Genre', value: tv.genres.map(genre => genre.name).join(', ') },
        { name: 'Rating', value: tv.vote_average + '/10' },
        { name: 'First Air Date', value: tv.first_air_date },
        { name: 'Last Air Date', value: tv.last_air_date },
        { name: 'Number of Seasons', value: tv.number_of_seasons },
        { name: 'Number of Episodes', value: tv.number_of_episodes },
        { name: 'Episode Runtime', value: tv.episode_run_time[0] + ' (mins)' },
        { name: 'Networks', value: tv.networks.map(network => network.name).join(', ') },
        { name: 'Production Companies', value: tv.production_companies.map(company => company.name).join(', ') },
        { name: 'Status', value: tv.status }
      ]
    };

    return <MediaInfo data={tvData} />;
  }
}

const mapStateToProps = state => {
  return {
    tv: state.tv.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (path, actionType, appendToResponse) => dispatch(getDataAsync(path, actionType, appendToResponse)),
    clearData: (actionType) => dispatch(clearData(actionType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TV);
