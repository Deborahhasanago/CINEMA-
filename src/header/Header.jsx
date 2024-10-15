import React from "react";
import Icon from "./components/Icon";
import NavMenu from "./components/NavMenu";
import SearchBar from "./components/SearchBar";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <Icon />
      <NavMenu />
      <SearchBar />
    </div>
  );
}

export default Header;
