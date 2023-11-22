import React, { useState } from "react";
import MicroIcon from "../Atom/Icon/Micro";

const Map = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = (): void => {
    setActive(!active);
  };

  return (
    <div className="">
      <div className="userBx">
        <div className="imgBx">
          <MicroIcon src="/profile.png" alt="user" path=""/>
        </div>
        <p className="username">Jully smith</p>
      </div>
      <div className="menuToggle" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="menu">
        <li>
          <a href="/">My profile</a>
        </li>
        <li>
          <a href="/">Edit</a>
        </li>
        <li>
          <a href="/">Notifications</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Help &amp; support</a>
        </li>
      </ul>
    </div>
  );
};

export default Map;
