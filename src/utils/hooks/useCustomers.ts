import { getCustomers } from '../api'
import { showErrorNotification } from '../notifications'
import { FETCH_DEFAULT_OPTIONS } from './config/index'
import { Customer } from 'shared/interfaces/customer.interface'

import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

export const useCustomers = () => {
  return useQuery<Customer[], AxiosError>(['customers'], () => getCustomers(), {
    ...FETCH_DEFAULT_OPTIONS,
    onError: () => showErrorNotification('Could not get customers'),
  })
}
