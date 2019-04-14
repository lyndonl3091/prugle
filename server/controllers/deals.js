const Deals = require('../models/deals')

exports.add = function(req, res, next) {
    Deals.create(req.body, err => {
        console.log('req:', req)
        if (err) {
          console.log(err)
          return res.status(400).send(err)
        }
        
        return res.status(200).send('OK')
      })
}