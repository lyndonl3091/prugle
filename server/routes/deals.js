'use strict'

const express = require('express')
const request = require('request')

const Deals = require('../models/deals')

let router = express.Router()


router.get('/', (req, res) => {
  console.log('GOT HERE!')
  Deals.find({}, (err, deal) => {
    console.log('TESTT HERE DEAL', deal)
    res.status(err ? 400 : 200).send(err || deal)
  })
})

router.post('/', (req, res) => {
  console.log('HELLO WORLD')
  Deals.create(req.body, (err, deal) => {
    if (err) {
      return res.status(400).send(err)
    }

    deal.save(err => {
      if (err) {
        return res.status(400).send(err)
      }
      return res.status(200).send('Saved!')
    })
  })
})



module.exports = router