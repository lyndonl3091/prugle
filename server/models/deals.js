const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dealsSchema = new Schema({
  title: String,
  description: String,
  postedOn: { type: Date, default: Date.now },
  votes: Number
});


const Deals = mongoose.model('deals', dealsSchema);

module.exports = Deals;
