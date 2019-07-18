import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import * as tvAction from '../../store/actions/tvAction';
import Grid from '../../components/UI/Grid/Grid';
import Spinner from '../../components/UI/Spinner/Spinner';

class TV extends Component {
  state = {
    hasMore: true,
  };

  loadData = () => {
    this.setState({
      hasMore: this.props.data.page <= this.props.data.total_pages,
    });
    switch (this.props.type) {
      case 'popularTV':
        this.props.getPopularTV();
        break;
      case 'topRatedTV':
        this.props.getTopRatedTV();
        break;
      case 'onTheAirTV':
        this.props.getOnAirTV();
        break;
      case 'onTheAirTodayTV':
        this.props.getAiringToday();
        break;
      default:
        return;
    }
  };

  handleScroll = () => {
    const {
      state: {
        hasMore
      }
    } = this;

    if (!hasMore) return;

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      this.loadData();
    }
  };

  constructor(props) {
    super(props);
    this.debouncedFunction = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.debouncedFunction);
    this.loadData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedFunction, false);
  }

  render() {
    const { data } = this.props;
    if (data.results.length === 0) return <Spinner />;
    return (
      <div>
        <Grid data={data.results} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.tv[ownProps.type]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularTV: () => dispatch(tvAction.getPopularTV()),
    getTopRatedTV: () => dispatch(tvAction.getTopRatedTV()),
    getOnAirTV: () => dispatch(tvAction.getOnTheAirTV()),
    getAiringToday: () => dispatch(tvAction.getOnTheAirTodayTV())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TV);
