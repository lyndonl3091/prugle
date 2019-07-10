import axios from 'axios'

// auth
export const signUp = user => axios.post('/signup', user)
export const signIn = user => axios.post('/signin', user)

// deals
export const getDeals = () => axios.get('/prugle/deals/')
export const addDeal = deal => axios.post('/prugle/deals/add', deal)
