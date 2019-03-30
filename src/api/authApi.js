import axios from 'axios'

export const signUp = user => axios.post('/signup', user)

export const singIn = user => axios.post('/signin', user)
