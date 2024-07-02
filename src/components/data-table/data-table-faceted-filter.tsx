import { useState } from 'react';
import { Column } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Command, CommandItem, CommandList, CommandEmpty, CommandInput } from '../ui/command';
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { DropdownMenuSeparator } from '../ui/dropdown-menu';

interface DataTableFacetedFilterProps<TData> {
  column: Column<TData, unknown>;
  title: string;
  options: { label: string; value: string }[];
  onFilterChange: (filterValue: string) => void;
}

export const DataTableFacetedFilter = <TData,>({
  column,
  title,
  options,
  onFilterChange
}: DataTableFacetedFilterProps<TData>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = [
    { label: <strong>الكل</strong>, value: '' },
    ...options
  ].filter(option =>
    typeof option.label === 'string'
      ? option.label.toLowerCase().includes(searchTerm.toLowerCase())
      : option.label.props.children.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className='gap-2 reveal'>
          <PlusCircledIcon className="mr-2 size-4" />
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[12.5rem] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} onValueChange={setSearchTerm} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {filteredOptions.map((option, index) => (
              <>
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    onFilterChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                </CommandItem>
                {index === 0 && <DropdownMenuSeparator />}
              </>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};