import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import * as tvAction from '../../store/actions/tvAction';
import Grid from '../../components/UI/Grid/Grid';
import Spinner from '../../components/UI/Spinner/Spinner';

class TopRatedTV extends Component {

  state = {
    error: false,
    hasMore: true,
    isLoading: false,
  };

  loadData = () => {
    this.props.getTopRatedTV();
    this.setState({
      hasMore: this.props.data.page <= this.props.data.total_pages
    });
  };

  handleScroll = () => {
    const {
      state: {
        error,
        hasMore,
        isLoading
      }
    } = this;

    if (error || !hasMore || isLoading) return;

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      // Do awesome stuff like loading more content!
      this.loadData();
    }
  }

  constructor(props) {
    super(props);
    this.debouncedFunction = debounce(this.handleScroll, 200);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.debouncedFunction);
    this.loadData();
  }

  componentWillUnmount() {
    // you need to unbind the same listener that was binded.
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

const mapStateToProps = (state) => {
  return {
    data: state.tv.topRatedTV
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopRatedTV: () => dispatch(tvAction.getTopRatedTV())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TopRatedTV);
