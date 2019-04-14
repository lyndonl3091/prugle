const jwt = require('jwt-simple');
const User = require('../models/user');
const secret = process.env.SECRET;

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
};

exports.signin = function(req, res, next) {
  const email = req.body.email;

  User.findOne({email: email}, (err, user) => {

    if(user) {
      res.send({ token: tokenForUser(req.user)});
    }
    
  });

};

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(400).send({ error: 'Please provide email and password'});
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if(err) { return next(err); }

    if(existingUser) {
      return res.status(400).send({ error: 'Email already exist'});
    }

    const user = new User({
      username: username,
      email: email,
      password: password,
    });

    user.save(err => {
      if(err) { return next(err); }

      res.json({ token: tokenForUser(user) });
    })

  });

}
