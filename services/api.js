import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.request.use(
    (config) => {
      const myConfig = config
      const token = Cookies.get('token')
      if (token) {
        myConfig.headers.Authorization = `Bearer ${token}`
      }
      return myConfig
    },
    (error) => Promise.reject(error),
    '',
  )
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        Cookies.remove('token')
        Cookies.remove('user-info')
        window.location.reload()
      }
      return Promise.reject(new Error(error))
    },
  )
