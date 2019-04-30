const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dealsSchema = new Schema({
  title: String,
  description: String,
  postedOn: { type: Date, default: Date.now },
  dateAdded: { type: Date, default: Date.now },
  isExpired: { type: Boolean, default: false },
  votes: { type: Number, default: 0 }
});


const Deals = mongoose.model('deals', dealsSchema);

module.exports = Deals;
