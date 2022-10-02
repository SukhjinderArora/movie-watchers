import React from "react";
import { useNavigate } from "react-router-dom";

import ToggleButton from "../ToggleButton/ToggleButton";
import Logo from "../../Logo/Logo";
import SearchButton from "../../UI/SearchButton/SearchButton";

import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  const navigate = useNavigate();
  const onSearchButtonClickHandler = () => {
    navigate("/search");
  };
  return (
    <header className={classes.Toolbar}>
      <div className={classes.ToggleButton}>
        <ToggleButton onClickHandler={props.toggleButtonClickHandler} />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <SearchButton
        color="#55AA29"
        width="18"
        height="18"
        onClickHandler={onSearchButtonClickHandler}
      />
    </header>
  );
};

export default Toolbar;
