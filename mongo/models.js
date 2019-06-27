const mongoose = require('mongoose')
const { Car } = require('./schemas')

const CarsModel = mongoose.model('Car', Car)

module.exports = {
  CarsModel
}