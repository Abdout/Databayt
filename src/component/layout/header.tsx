import React from "react";
import Mobile from "../home/mobile";
import Nav from "../home/nav";
import XlInupt from "../atom/input/xl";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col space-y-2">
      <nav className="flex py-2 justify-between items-center max-container padding-container relative z-30">
        <Link href='/'>
        <h1>Databayt</h1>
        </Link>
        <Nav />
      </nav>
      <XlInupt placeholder="Search" /> 
      <Mobile />
    </div>
  );
};
export default Header;
