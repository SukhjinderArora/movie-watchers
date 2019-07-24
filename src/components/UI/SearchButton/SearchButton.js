import React from 'react';

import classes from './SearchButton.module.css';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';

const SearchButton = (props) => {
  return (
    <button type="submit" className={classes.SearchButton} onClick={props.onClickHandler}>
      <SearchIcon color={props.color} width={props.width} height={props.height} />
    </button>
  );
};

export default SearchButton;
