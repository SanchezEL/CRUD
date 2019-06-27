const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Car = new Schema({
  brand: String,
  model: String,
  year: String,
  color: String
})

module.exports = { Car }