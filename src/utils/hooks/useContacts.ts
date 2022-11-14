import { getContacts } from '../../utils/api'
import { showErrorNotification } from '../../utils/notifications'
import { FETCH_DEFAULT_OPTIONS } from './config/index'
import { Contact } from 'shared/interfaces/contact.interface'

import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

export const useContacts = () => {
  return useQuery<Contact[], AxiosError>(['contacts'], () => getContacts(), {
    ...FETCH_DEFAULT_OPTIONS,
    onError: () => showErrorNotification('Could not get contacts'),
  })
}
