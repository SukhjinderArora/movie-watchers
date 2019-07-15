import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PopularTV from './PopularTV';
import TopRatedTV from './TopRatedTV';
import OnAirTV from './OnAirTV';
import OnAirToday from './OnAirToday';
import TVInfo from './TVInfo';

class TV extends Component {
  render() {
    return (
      <Switch>
        <Route path="/tv/popular" component={PopularTV}/>
        <Route path="/tv/topRated" component={TopRatedTV}/>
        <Route path="/tv/onAir" component={OnAirTV}/>
        <Route path="/tv/onAirToday" component={OnAirToday}/>
        <Route path="/tv/:title/:id" component={TVInfo}/>
      </Switch>
    );
  }
}

export default TV;
