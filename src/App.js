import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import * as configActions from './store/actions/configActions';
import * as genreActions from './store/actions/genreActions';
import ShowDetails from './containers/ShowDetails/ShowDetails';

class App extends Component {
  componentDidMount() {
    this.props.getConfig();
    this.props.getMovieGenres();
    this.props.getTVGenres();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/movie/:title/:id" component={ShowDetails}/>
          <Route path="/tv/:title/:id" component={ShowDetails}/>
          <Route path="/" exact component={Layout} />
          <Route render={() => <h1>404 Page Not Found!</h1>}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getConfig: () => dispatch(configActions.getConfigAsync()),
    getMovieGenres: () => dispatch(genreActions.getMovieGenresAsync()),
    getTVGenres: () => dispatch(genreActions.getTVGenresAsync())
  }
};
export default connect(null, mapDispatchToProps)(App);
