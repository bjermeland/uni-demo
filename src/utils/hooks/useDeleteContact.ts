import { deleteContact } from '../../utils/api'
import { showErrorNotification, showSuccessNotification } from '../../utils/notifications'
import { Contact } from 'shared/interfaces/contact.interface'

import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'

export const useDeleteContact = () => {
  const queryClient = useQueryClient()
  return useMutation<Contact, AxiosError, number>(contactId => deleteContact(contactId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts'])
      showSuccessNotification('Delete contact successfully')
    },
    onError: () => showErrorNotification('Failed to remove contact, please try again..'),
  })
}
