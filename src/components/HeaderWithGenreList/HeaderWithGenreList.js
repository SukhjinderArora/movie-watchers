import React from 'react';

import classes from './HeaderWithGenreList.module.css';

const HeaderWithGenreList = ({ title, genreList, selectedGenre, onSelectChangeHandler}) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.selectBox}>
        <label htmlFor="genres">Genre:</label>
        <select name="genres" id="genres" onChange={onSelectChangeHandler} value={selectedGenre}>
          <option value="">All</option>
          {genreList ? genreList.map(genre => <option value={genre.id} key={genre.id}>{genre.name}</option>) : null}
        </select>
      </div>
    </header>
  );
};

export default HeaderWithGenreList;
