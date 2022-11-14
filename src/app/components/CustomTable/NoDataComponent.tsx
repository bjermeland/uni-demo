import { Text } from '@mantine/core'

export const NoDataComponent = ({ searchFilterText }: { searchFilterText: string }) => (
  <Text m="xl">
    Could not find any contacts{searchFilterText !== '' ? ' for your search.' : '.'}
  </Text>
)
