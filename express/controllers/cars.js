var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId
const { CarsModel } = require('../../mongo/models')

// 1. create a function called getAll that returns everything
const getAll = () => {
  return CarsModel.find({})
}
// 2. create a function called createMovie that accepts a "movie" param
const createCar = (car) => {
  return CarsModel.create(car)
}
// 3. create a function called deleteMovie that accepts a "movieName" param
// const deleteMovie = (car) => {
//   // use name as the query 
//   return CarsModel.findOneAndDelete({movieName: movie})
// }

// 4. create a function called getById that accepts an "id" param and finds one ticket
// hint: in your db query, you will use objectId like this: ObjectId(id)
const getById = (id) => {
  // console.log("so")
  return CarsModel.findOne({_id:id})
}


module.exports = {
  getAll,
  createCar,
  // deleteMovie,
  getById
}