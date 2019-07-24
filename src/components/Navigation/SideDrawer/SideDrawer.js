import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClasses[1] = classes.Open;
  }
  return (
    <>
      <BackDrop show={props.open} clicked={props.sideDrawerCloseHandler} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationItems menuItemClickHandler={props.sideDrawerCloseHandler}/>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
