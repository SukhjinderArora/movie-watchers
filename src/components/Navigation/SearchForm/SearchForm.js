import React from 'react';

import SearchButton from '../../UI/SearchButton/SearchButton';
import classes from './SearchForm.module.css';

const SearchForm = (props) => {
  return (
    <form action="" onSubmit={props.searchHandler} className={classes.SearchForm}>
      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        value={props.searchInput}
        className={classes.SearchInput}
        onChange={props.inputChangeHandler}
        autoFocus={props.autoFocus} />
      <div className={classes.SearchButton}>
        <SearchButton color="#8e8e8e" width="18" height="18" />
      </div> 
    </form>
  );
};

export default SearchForm;
