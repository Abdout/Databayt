import React from "react";
import CentiInupt from "../atom/input/xl";
import Mobile from "../home/mobile";
import Nav from "../home/nav";

const Header = () => {
  return (
    <div className="flex flex-col space-y-2">
      <nav className="flex py-2 justify-between items-center max-container padding-container relative z-30">
        <h1>Databayt</h1>
        <Nav />
      </nav>
      <CentiInupt placeholder="Search" /> 
      <Mobile />
    </div>
  );
};
export default Header;
