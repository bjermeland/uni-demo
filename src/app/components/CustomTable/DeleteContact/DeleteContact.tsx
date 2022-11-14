import { DeleteContactModal } from './DeleteContactModal'
import { Contact } from 'shared/interfaces/contact.interface'

import { ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons'
import { useState } from 'react'

export const DeleteContact = ({ contact }: { contact: Contact }) => {
  const [openDeleteContactModal, setOpenDeleteContactModal] = useState(false)

  return (
    <>
      <ActionIcon color="red" onClick={() => setOpenDeleteContactModal(true)}>
        <IconTrash size={18} />
      </ActionIcon>
      <DeleteContactModal
        title="Delete contact"
        isOpen={openDeleteContactModal}
        setIsOpen={setOpenDeleteContactModal}
        contact={contact}
      />
    </>
  )
}
