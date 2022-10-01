import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchButton from "../../UI/SearchButton/SearchButton";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const onInputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const onSubmitSearchHandler = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `?query=${encodeURIComponent(searchInput)}`,
    });
    setSearchInput("");
  };
  return (
    <form
      action=""
      onSubmit={onSubmitSearchHandler}
      className={classes.SearchForm}
    >
      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        value={searchInput}
        className={classes.SearchInput}
        onChange={onInputChangeHandler}
        autoFocus={props.autoFocus}
      />
      <div className={classes.SearchButton}>
        <SearchButton color="#8e8e8e" width="18" height="18" />
      </div>
    </form>
  );
};

export default SearchForm;
