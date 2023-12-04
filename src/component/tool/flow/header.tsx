
import FlowBurger from "./burger";
import XlInupt from "@/component/atom/input/xl";
import SmIcon from "@/component/atom/icon/sm";
import Burger from "@/component/atom/icon/burger";

const Header = () => {
    return (
      <>
        <div className="hidden md:flex  justify-between p-4">
          <div className="flex justfiy-end items-center gap-[30rem] pl-[30rem]">
            <SmIcon src="/search.png" alt="search" path="" />
            <SmIcon src="/profile.png" alt="Osman" path="#" />
          </div>
        </div>
  
        <div className="md:hidden">
          <Burger />
        </div>
      </>
    );
  };
  
  export default Header;