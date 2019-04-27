import axios from 'axios'

export const getDeals = () => axios.get('/prugle/deals/')

export const addDeal = deal => axios.post('/prugle/deals/add', deal)
