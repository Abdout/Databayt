export type member = {
  _id: string;
  name: string;
  dob: string;
  address: string;
  gender: string;
  rank: string;
  interest: string;
  skill: string;
  club: string;
  image: string;
  contact: {
    phone: string;
    facebook: string;
    whatsapp: string;
  }
}

export interface MemberContextProps {
  member: member | null;
  members: member[];
  fetchMember: (id: string) => void;
  fetchMembers: () => void;
  refreshMembers: () => void;
  deleteMember: (id: string) => void;
  createMember: (data: member) => void; // Assuming you need a method to create a member
  updateMember: (id: string, data: Partial<member>) => void; // Assuming you need a method to update a member
}