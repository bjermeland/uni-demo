import { AddContactModal } from './AddContactModal'

import { Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'

export const AddContact = () => {
  const isLargeScreen = useMediaQuery('(min-width: 900px)')

  const [openAddContactModal, setOpenAddContactModal] = useState(false)

  return (
    <>
      <Button
        sx={{ width: isLargeScreen ? '50%' : '100%' }}
        onClick={() => setOpenAddContactModal(true)}
      >
        New contact
      </Button>
      <AddContactModal
        title="New Contact"
        isOpen={openAddContactModal}
        setIsOpen={setOpenAddContactModal}
      />
    </>
  )
}
