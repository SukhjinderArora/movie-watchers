import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import * as tvAction from '../../store/actions/tvAction';
import Grid from '../../components/UI/Grid/Grid';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './TV.module.css';

class TV extends Component {
  state = {
    hasMore: true,
    selectedGenre: '',
  };

  onCardClickHandler = (path) => {
    this.props.history.push(path);
  };

  loadData = () => {
    this.setState({
      hasMore: this.props.data.page <= this.props.data.total_pages,
    });
    switch (this.props.type) {
      case 'popularTV':
        this.props.getPopularTV(this.state.selectedGenre);
        break;
      case 'topRatedTV':
        this.props.getTopRatedTV(this.state.selectedGenre);
        break;
      case 'onTheAirTV':
        this.props.getOnAirTV(this.state.selectedGenre);
        break;
      case 'onTheAirTodayTV':
        this.props.getAiringToday(this.state.selectedGenre);
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

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 700)) {
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
    if (!this.props.genres) {
      this.props.getTVGenres();
    }
    this.props.clearData();
    this.loadData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedFunction, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedGenre !== this.state.selectedGenre) {
      this.props.clearData();
      this.loadData();
    }
  }

  onSelectChangeHandler = (e) => {
    this.setState({
      selectedGenre: e.target.value
    });
  }

  render() {
    const { data } = this.props;
    const { genres } = this.props;
    let components;
    if (data.results.length === 0 && data.total_results === -1) {
      components = <Spinner />;
    } else if (data.results.length === 0 && data.total_results === 0) {
      components = <h1 className={classes.resultNotFound}>No Results Found</h1>;
    } else {
      components = (
        <>
          <Grid data={data.results} onClickHandler={this.onCardClickHandler}/>
          {this.props.data.page < this.props.data.total_pages ? <Spinner /> : null }
        </>
      );
    }
    return (
      <div className={classes.TVContainer}>
        <header className={classes.header}>
          <h1>{this.props.title}</h1>
          <div className={classes.selectBox}>
            <label htmlFor="genres">Genre:</label>
            <select name="genres" id="genres" onChange={this.onSelectChangeHandler} value={this.state.selectedGenre}>
              <option value="">All</option>
               {genres ? genres.map(genre => <option value={genre.id} key={genre.id}>{genre.name}</option>) : null}
            </select>
          </div>
        </header>
        {components}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.tv[ownProps.type],
    genres: state.tv.genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularTV: (genre) => dispatch(tvAction.getPopularTV(genre)),
    getTopRatedTV: (genre) => dispatch(tvAction.getTopRatedTV(genre)),
    getOnAirTV: (genre) => dispatch(tvAction.getOnTheAirTV(genre)),
    getAiringToday: (genre) => dispatch(tvAction.getOnTheAirTodayTV(genre)),
    getTVGenres: () => dispatch(tvAction.getTVGenres()),
    clearData: () => dispatch(tvAction.resetTVData()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TV);
