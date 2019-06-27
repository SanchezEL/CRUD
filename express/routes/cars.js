const express = require('express')
const router = express.Router()
const CarsController = require('../controllers/cars')

// Create a route for getting all movies/tickets from the db
// This corresponds to item 1 in the controller
router.get('/cars', (request, response) => {
  CarsController.getAll()
    .then(results => response.json(results))
})

// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post('/', (request, response) => {
  console.log('anything')
  CarsController.createCar(request.body)
    .then(car => response.json(car))
})

// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete('/:car', (request, response) => {
  CarsController.deleteCar(request.params.car)
    .then(() => response.send('car deleted'))
})

// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller
router.get('/:id', (request, response) => {
  CarsController.getById(request.params.id)
    .then((results) => response.json(results))
})

module.exports = router