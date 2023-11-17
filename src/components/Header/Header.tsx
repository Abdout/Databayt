"use client";
import Databayt from "../Text/Databayt";
import Burger from "../Nav/Burger";
import Nav from "../Nav/Nav";
import CentiInupt from "../Input/Centi";
import Mobile from "../Nav/Mobile";

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
