import { ActionIcon, TextInput } from '@mantine/core'
import { IconSearch, IconX } from '@tabler/icons'

interface FilterComponentProps {
  searchFilterText: string
  onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}

export const FilterComponent = ({ searchFilterText, onFilter, onClear }: FilterComponentProps) => {
  return (
    <TextInput
      placeholder="Search"
      onChange={onFilter}
      value={searchFilterText}
      rightSection={
        searchFilterText.length > 0 ? (
          <ActionIcon onClick={onClear} aria-label="Clear search text">
            <IconX size={16} />
          </ActionIcon>
        ) : (
          <IconSearch size={16} />
        )
      }
    />
  )
}
