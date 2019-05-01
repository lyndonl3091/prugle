'use strict'

const express = require('express')
const request = require('request')

const Deals = require('../models/deals')

let router = express.Router()


router.get('/', (req, res) => {
  Deals.find({}, (err, deal) => {
    res.status(err ? 400 : 200).send(err || deal)
  })
})

router.post('/', (req, res) => {
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

router.post('/upvote', (req, res) => {
  isSecureContext.findById(req.body.id).exec((err, deal) => {
    if (err) return res.status(400).send(err)

    if (deal) {
      deal.votes += 1
      dealsave((err, savedDeal) => {
        if (err) return res.status(400).send(err)
      })
    } else {
      return res.status(400).send('No deal found with that ID')
    }
  })
})

router.post('/downvote', (req, res) => {
  isSecureContext.findById(req.body.id).exec((err, deal) => {
    if (err) return res.status(400).send(err)

    if (deal) {
      deal.votes -= 1
      dealsave((err, savedDeal) => {
        if (err) return res.status(400).send(err)
      })
    } else {
      return res.status(400).send('No deal found with that ID')
    }
  })
})



module.exports = router