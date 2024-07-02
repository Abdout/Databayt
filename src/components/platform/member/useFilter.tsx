import { useMember } from './context';
import { useEffect, useState } from 'react';
import { member } from './type';

interface FilterOption {
    label: string;
    value: string;
}

const getUniqueValues = (members: member[], property: keyof member) => {
    if (property === 'contact') {
      return [];
    }
  
    const values = members.map(member => member[property]);
    return Array.from(new Set(values)).map(value => ({ label: value as string, value: value as string }));
  };

export const useFilter = (property: keyof member): FilterOption[] => {
  const { members, refreshMembers } = useMember();
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);

  useEffect(() => {
    refreshMembers();
  }, [refreshMembers]);

  useEffect(() => {
    const uniqueValues = getUniqueValues(members, property);
    setFilterOptions(uniqueValues);
  }, [members, property]);

  return filterOptions;
};