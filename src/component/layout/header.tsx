import React from "react";
import Mobile from "../home/mobile";
import Nav from "../home/nav";
import XlInupt from "../atom/input/xl";

const Header = () => {
  return (
    <div className="flex flex-col space-y-2">
      <nav className="flex py-2 justify-between items-center max-container padding-container relative z-30">
        <h1>Databayt</h1>
        <Nav />
      </nav>
      <XlInupt placeholder="Search" /> 
      <Mobile />
    </div>
  );
};
export default Header;
