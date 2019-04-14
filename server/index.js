require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URI  || 'mongodb://localhost/prugle';

mongoose.connect(mongoUrl, err => {
  console.log(err || `MongoDB connected to ${mongoUrl}`);
})

app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
