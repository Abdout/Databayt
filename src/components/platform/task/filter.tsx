import { useTask } from './context';
import { useEffect, useState } from 'react';
import { task } from './type';

interface FilterOption {
    label: string;
    value: string;
}

const getUniqueValues = (tasks: task[], property: keyof task) => {
    const values = tasks.map(task => task[property]);
    return Array.from(new Set(values)).map(value => ({ label: value as string, value: value as string }));
};

export const useFilter = (property: keyof task): FilterOption[] => {
    const { tasks, refreshTasks } = useTask();
    const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);

    useEffect(() => {
        refreshTasks();
    }, [refreshTasks]);

    useEffect(() => {
        const uniqueValues = getUniqueValues(tasks, property);
        setFilterOptions(uniqueValues);
    }, [tasks, property]);

    return filterOptions;
};