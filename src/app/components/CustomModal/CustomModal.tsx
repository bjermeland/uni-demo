import { Modal } from '@mantine/core'
import { ReactNode } from 'react'

interface CustomModalProps {
  title: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  size?: string | number
  children: ReactNode
}

export const CustomModal = ({ title, isOpen, setIsOpen, size, children }: CustomModalProps) => {
  return (
    <Modal
      opened={isOpen}
      onClose={() => setIsOpen(false)}
      title={title}
      size={size}
      closeButtonLabel={`Close ${title} modal`}
    >
      {children}
    </Modal>
  )
}
