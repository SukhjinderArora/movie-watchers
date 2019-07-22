import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import SubNavigationItem from './SubNavigationItem/SubNavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem 
        link="/movies" 
        linkName="Movies" 
        menuItemClickHandler={props.menuItemClickHandler}
        mouseEnterHandler={() => props.mouseEnterHandler(1)}
        mouseLeaveHandler={props.mouseLeaveHandler} >
        <ul className={[classes.SubNavigationItems, (props.dropDownOpen && props.activeDropdown === 1) ? classes.Open : '' ].join(' ')}>
          <SubNavigationItem 
            link="/movies/popular" 
            linkName="Popular" 
            menuItemClickHandler={props.menuItemClickHandler}/>
          <SubNavigationItem 
            link="/movies/topRated" 
            linkName="Top Rated"
            menuItemClickHandler={props.menuItemClickHandler}/>
          <SubNavigationItem 
            link="/movies/upcoming" 
            linkName="Upcoming"
            menuItemClickHandler={props.menuItemClickHandler}/>
          <SubNavigationItem 
            link="/movies/nowPlaying" 
            linkName="Now Playing"
            menuItemClickHandler={props.menuItemClickHandler}/>
        </ul>
      </NavigationItem>
      <NavigationItem 
        link="/tv" 
        linkName="TV"
        menuItemClickHandler={props.menuItemClickHandler}
        mouseEnterHandler={() => props.mouseEnterHandler(2)}
        mouseLeaveHandler={props.mouseLeaveHandler}>
        <ul className={[classes.SubNavigationItems, (props.dropDownOpen && props.activeDropdown === 2) ? classes.Open : ''].join(' ')}>
          <SubNavigationItem 
            link="/tv/popular" 
            linkName="Popular" 
            menuItemClickHandler={props.menuItemClickHandler}/>
          <SubNavigationItem 
            link="/tv/topRated" 
            linkName="Top Rated" 
            menuItemClickHandler={props.menuItemClickHandler}/>
          <SubNavigationItem 
            link="/tv/onAir" 
            linkName="On Air" 
            menuItemClickHandler={props.menuItemClickHandler}/>
          <SubNavigationItem 
            link="/tv/onAirToday" 
            linkName="On Air Today" 
            menuItemClickHandler={props.menuItemClickHandler}/>
        </ul>
      </NavigationItem>
    </ul>
  );
};

NavigationItems.defaultProps = {
  mouseEnterHandler: () => {},
  mouseLeaveHandler: () => {},
  dropDownOpen: true,
  activeDropdown: 1,
  menuItemClickHandler: () => {}
};

export default NavigationItems;
