import axios from 'axios'

export const signUp = user => axios.post('/signup', user)

export const signIn = user => axios.post('/signin', user)
