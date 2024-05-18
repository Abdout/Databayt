// // PropsComponent.tsx
// 'use client';
// import React, { useContext } from 'react';
// import { ComponentContext } from './context';
// import { componentProps } from './provider';

// const PropsComponent: React.FC = () => {
//   const { activeSubItem, activeProp, setActiveProp } = useContext(ComponentContext);

//   const handlePropClick = (prop: string) => {
//     setActiveProp(activeProp === prop ? null : prop);
//   }

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {activeSubItem && componentProps[activeSubItem].map((prop: string, propIndex: number) => (
//         <div
//           key={propIndex}
//           onClick={(e) => {
//             e.stopPropagation();
//             handlePropClick(prop);
//           }}
//           className="relative"
//         >
//           <div
//             className={`flex items-center justify-between space-x-[50px] px-6 hover:bg-gray-200 p-2 w-full cursor-pointer ${activeProp === prop ? 'opacity-100 bg-gray-300 hover:bg-gray-300' : 'opacity-50'}`}
//           >
//             <h4 className='justify-start'>{prop}</h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PropsComponent;

