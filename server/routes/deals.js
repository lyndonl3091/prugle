'use strict'

const express = require('express')
const request = require('request')

const Favor = require('../models/deals')

let router = express.Router()


router.get('/', (req, res) => {
  Favor.find({}, (err, deal) => {
    res.status(err ? 400 : 200).send(err || deal)
  })
})




module.exports = router