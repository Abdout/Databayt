// import Link from "next/link";
// import React, { useState } from "react";

// interface MenuItem {
// //   icon: React.ReactNode;
//   title: string;
//   path: string;
//   subNav?: MenuItem[];
//   iconOpened?: React.ReactNode;
//   iconClosed?: React.ReactNode;
// }

// const SubMenu: React.FC<{ item: MenuItem }> = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);

//   const showSubnav = () => setSubnav(!subnav);

//   return (
//     <>
//       <Link href={item.path}>
//         <div
//           className="flex justify-between items-center p-4 h-14 cursor-pointer"
//           onClick={() => item.subNav && showSubnav()}
//         >
//           {/* {item.icon} */}
//           <div className="flex items-center justify-between p-4 h-14 ">
//             {item.title}
//           </div>
//         </div>
//       </Link>
//       <div>
//         {item.subNav && subnav
//           ? item.iconOpened
//           : item.subNav
//           ? item.iconClosed
//           : null}
//       </div>

//       {subnav &&
//         item.subNav?.map((subItem, index: number) => (
//           <Link href={subItem.path} key={index}>
//             <div className="h-14 pl-11 items-center cursor-pointer">
//               {/* {subItem.icon} */}
//               <div className="flex items-center justify-between p-4 h-14 ">
//                 {subItem.title}
//               </div>
//             </div>
//           </Link>
//         ))}
//     </>
//   );
// };

// export default SubMenu;
