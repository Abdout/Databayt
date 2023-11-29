"use client";



import CentiInupt from "../atom/input/centi";
import Mobile from "../home/mobile";
import Nav from "../home/nav";

const Header = () => {
  return (
    <div className="flex flex-col space-y-4">
      <nav className="flex justify-between items-center max-container padding-container relative z-30">
        <h1>Databayt</h1>
        <Nav />
       
        {/* <Burger /> */}
      </nav>

      <CentiInupt placeholder="Search" /> 
      <Mobile />
    </div>
  );
};
export default Header;
