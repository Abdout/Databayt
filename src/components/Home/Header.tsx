"use client";
import Databayt from "../Atom/Text/Databayt";
import Burger from "./Burger";
import Nav from "./Nav";
import CentiInupt from "../Atom/Input/Centi";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <div className="flex flex-col space-y-4">
      <nav className="flex justify-between items-center max-container padding-container relative z-30">
        <Databayt />
        <Nav />
        <Burger />
      </nav>

      <CentiInupt placeholder="Search" />
      <Mobile />
    </div>
  );
};
export default Header;
