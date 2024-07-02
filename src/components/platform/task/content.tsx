// 'use client';
// import React, { useEffect } from "react";
// import { useMember } from "./context";
// import { domain } from "@/lib/domain";

// const MemberContent: React.FC = () => {
//     const { refreshMembers, members, deleteMember } = useMember();

//     useEffect(() => {
//         refreshMembers();
//         console.log(members); // Add this line
//     }, []);

//     const Delete = async (id: string) => {
//         const confirmed = window.confirm("Are you sure?");

//         if (confirmed) {
//             const res = await fetch(`${domain}/api/member?id=${id}`, {
//                 method: "DELETE",
//             });

//             if (res.ok) {
//                 refreshMembers();
//             }
//         }
//     };

//     return (
//         <div className="flex flex-col gap-12 pt-6 space-y-10" dir="rtl">
//             {members.map((member) => {
//                 return (
//                     <div key={member._id}>
//                         <h2>Name: {member.name}</h2>
//                         <h2>DOB: {member.dob}</h2>
//                         <h2>Address: {member.address}</h2>
//                         <h2>Gender: {member.gender}</h2>
//                         <h2>Rank: {member.rank}</h2>
//                         <h2>Interests: {member.interest}</h2>
//                         <h2>Skills: {member.skill}</h2>
//                         <h2>Contact: {JSON.stringify(member.contact)}</h2>
//                         <button onClick={() => member._id && deleteMember(member._id)}>Delete</button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default MemberContent;