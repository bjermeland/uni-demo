import { dataTableStyles } from '../../../utils/table-styles'
import { CustomLoader } from '../CustomLoader'
import { AddContact } from './AddContact/AddContact'
import { DeleteContact } from './DeleteContact/DeleteContact'
import { EditContact } from './EditContact/EditContact'
import { FilterComponent } from './FilterComponent'
import { NoDataComponent } from './NoDataComponent'
import { Contact } from 'shared/interfaces/contact.interface'

import { SimpleGrid, useMantineTheme } from '@mantine/core'
import { Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import * as dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { useEffect, useMemo, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'

dayjs.extend(LocalizedFormat)

const dateFormat = 'DD/MM/YYYY HH:mm'

const columns: TableColumn<Contact>[] = [
  {
    name: 'Customer',
    grow: 2,
    selector: row => row.ParentBusinessRelation.Name,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.Info.Name,
    sortable: true,
  },
  {
    name: 'Role',
    selector: row => row.Role,
    sortable: true,
  },
  {
    name: 'Phone',
    selector: row => row.Info.DefaultPhone.Number,
    sortable: true,
  },
  {
    name: 'Email',
    grow: 3,
    selector: row => row.Info.DefaultEmail.EmailAddress,
    sortable: true,
  },
  {
    name: '',
    button: true,
    grow: 1,
    cell(row) {
      return (
        <Group spacing="md">
          <EditContact contact={row} />
          <DeleteContact contact={row} />
        </Group>
      )
    },
  },
]

export const CustomTable = ({ data }: { data: Contact[] }) => {
  const theme = useMantineTheme()
  const isLargeScreen = useMediaQuery('(min-width: 900px)')

  const [filteredData, setFilteredData] = useState<Contact[]>([])
  const [searchFilterText, setSearchFilterText] = useState('')

  const subHeaderComponentMemo = useMemo(
    () => (
      <SimpleGrid cols={isLargeScreen ? 2 : 1} sx={{ width: '100%' }} mt={40} mb={15}>
        <AddContact />
        <FilterComponent
          onClear={() => setSearchFilterText('')}
          onFilter={e => setSearchFilterText(e.target.value)}
          searchFilterText={searchFilterText}
        />
      </SimpleGrid>
    ),
    [searchFilterText, isLargeScreen],
  )

  useEffect(
    () => setFilteredData(data.filter(contact => searchInContacts(contact, searchFilterText))),
    [searchFilterText, data],
  )

  return (
    <div className={theme.colorScheme}>
      <DataTable
        className={theme.colorScheme}
        columns={columns}
        data={filteredData}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        progressPending={!data}
        progressComponent={<CustomLoader />}
        pagination
        paginationPerPage={15}
        paginationRowsPerPageOptions={[15, 25, 50, 100]}
        theme={theme.colorScheme}
        customStyles={dataTableStyles}
        noDataComponent={<NoDataComponent searchFilterText={searchFilterText} />}
      />
    </div>
  )
}

const searchInContacts = (contact: Contact, searchFilterText: string) =>
  contact.ParentBusinessRelation.Name.toLowerCase().includes(searchFilterText.toLowerCase()) ||
  contact.Info.Name.toLowerCase().includes(searchFilterText.toLowerCase()) ||
  contact.Role.toLowerCase().includes(searchFilterText.toLowerCase()) ||
  contact.Info.DefaultPhone.Number.toLowerCase().includes(searchFilterText.toLowerCase()) ||
  contact.Info.DefaultEmail.EmailAddress.toLowerCase().includes(searchFilterText.toLowerCase())
