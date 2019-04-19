import axios from 'axios'

export const getDeals = () => axios.post('/prudgle/deals', user)

export const addDeal = deal => axios.post('/prugle/deals/add', user)
