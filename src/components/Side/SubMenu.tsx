import React, { useState } from 'react';


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div className='flex justify-between items-center p-4 h-14' to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <div className='flex items-center justify-between p-4 h-14 '>{item.title}</div>
      
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className='h-14 pl-11 items-center' to={item.path} key={index}>
              {item.icon} 
 
              <div className='flex items-center justify-between p-4 h-14 '>{item.title}</div>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;