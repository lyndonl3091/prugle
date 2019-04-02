const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dealsSchema = new Schema({
  title: String,
  description: String,
  datePosted: { type: Date, default: Date.now },
});


const Deals = mongoose.model('deals', dealsSchema);

module.exports = Deals;
