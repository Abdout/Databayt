import { useState } from 'react'
import { Column } from '@tanstack/react-table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Option } from '@/components/table/index'

interface DataTableFacetedFilterProps<TData> {
  column: Column<TData, unknown>
  title: string
  options: Option[]
}

export function DataTableFacetedFilter<TData>({
  column,
  title,
  options
}: DataTableFacetedFilterProps<TData>) {
  const [value, setValue] = useState<string | undefined>(
    column.getFilterValue() as string
  )

  return (
    <Select
      value={value}
      onValueChange={newValue => {
        setValue(newValue)
        column.setFilterValue(newValue)
      }}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
