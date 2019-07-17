import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getShowDetails, resetTVData } from '../../store/actions/tvAction';

import MediaInfo from '../../components/MediaInfo/MediaInfo';
import Spinner from '../../components/UI/Spinner/Spinner';

class TVInfo extends Component {

  getTVShow = () => {
    this.props.clearPrevShow();
    const tvId = this.props.match.params.id;
    this.props.getShowDetails(tvId);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getTVShow();
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
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
      videoKey: tv.videos.results[0] ? tv.videos.results[0].key : null,
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
    getShowDetails: (tvId) => dispatch(getShowDetails(tvId)),
    clearPrevShow: () => dispatch(resetTVData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVInfo);
