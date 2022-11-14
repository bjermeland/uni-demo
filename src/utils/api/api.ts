import { useAuthStore } from '../../store'

import axios from 'axios'

export const api = axios.create({
  baseURL: `https://test.softrig.com`,
})

api.interceptors.request.use(req => {
  const accessToken = useAuthStore.getState().accessToken
  if (req.headers) req.headers.Authorization = `Bearer ${accessToken}`
  return req
})
