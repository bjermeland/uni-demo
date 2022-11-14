import { EditContactModal } from './EditContactModal'
import { Contact } from 'shared/interfaces/contact.interface'

import { ActionIcon } from '@mantine/core'
import { IconEdit } from '@tabler/icons'
import { useState } from 'react'

export const EditContact = ({ contact }: { contact: Contact }) => {
  const [openEditContactModal, setOpenEditContactModal] = useState(false)

  return (
    <>
      <ActionIcon color="blue" onClick={() => setOpenEditContactModal(true)}>
        <IconEdit size={18} />
      </ActionIcon>
      <EditContactModal
        title="Edit contact"
        isOpen={openEditContactModal}
        setIsOpen={setOpenEditContactModal}
        contact={contact}
      />
    </>
  )
}
