// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Icon } from "@iconify/react";
// import { SIDENAV_ITEMS } from "@/constant/dash";
// import { SideNavItem } from "@/type/SideNavItem";

// const SideNav = () => {
//   return (
//     <div className="flex flex-col space-y-2 p-4 pt-6">
//       {SIDENAV_ITEMS.map((item, idx) => {
//         return <MenuItem key={idx} item={item} />;
//       })}
//     </div>
//   );
// };

// export default SideNav;

// const MenuItem = ({ item }: { item: SideNavItem }) => {
//   const pathname = usePathname();
//   const [subMenuOpen, setSubMenuOpen] = useState(false);
//   const toggleSubMenu = () => {
//     setSubMenuOpen(!subMenuOpen);
//   };

//   return (
//     <div className="">
//       {item.submenu ? (
//         <>
//           <button
//             onClick={toggleSubMenu}
//             className={`flex flex-row items-center p-4  hover-bg-zinc-100 w-full justify-between hover:bg-gray-300${
//               pathname.includes(item.path) ? "bg-zinc-100" : ""
//             }`}
//           >
//             <div className="flex flex-row space-x-4 items-center">
//               {item.icon}
//               <span className="font-medium text-xl  flex">{item.title}</span>
//             </div>

//             <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
//               <Icon icon="lucide:chevron-down" width="24" height="24" />
//             </div>
//           </button>

//           {subMenuOpen && (
//             <div className="my-2 ml-12 flex flex-col space-y-4">
//               {item.subMenuItems?.map((subItem, idx) => {
//                 return (
//                   <Link
//                     key={idx}
//                     href={subItem.path}
//                     className={`${
//                       subItem.path === pathname ? "font-medium" : ""
//                     }`}
//                   >
//                     <span>{subItem.title}</span>
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </>
//       ) : (
//         <Link
//           href={item.path}
//           className={`flex flex-row space-x-2 items-center p-2 hover:bg-gray-300  ${
//             item.path === pathname ? "bg-gray-400 " : ""
//           }`}
//         >
//           {item.icon}
//           <span className="font-medium text-xl flex">{item.title}</span>
//         </Link>
//       )}
//     </div>
//   );
// };
