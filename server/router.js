const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const express = require('express');
const path = require('path');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

  app.use(express.static('public'));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '/index.html'));
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.use('/api', require('./routes/api'));
}
