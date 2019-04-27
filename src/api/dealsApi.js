import axios from 'axios'

export const getDeals = () => {
    console.log('api called')
    debugger
    return axios.get('/prugle/deals/')
}


export const addDeal = deal => axios.post('/prugle/deals/add', deal)
