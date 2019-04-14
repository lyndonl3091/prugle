'use strict'

const express = require('express')
const request = require('request')

const Deals = require('../models/deals')

let router = express.Router()


router.get('/', (req, res) => {
  Deals.find({}, (err, deal) => {
    console.log('TESTT HERE DEAL', deal)
    res.status(err ? 400 : 200).send(err || deal)
  })
})

router.post('/add', (req, res) => {
  // add deal
  Deals.create(req.body, err => {
    console.log('req:', req)
    if (err) {
      console.log(err)
      return res.status(400).send(err)
    }
    
    return res.status(200).send('OK')
  })
})  



module.exports = router