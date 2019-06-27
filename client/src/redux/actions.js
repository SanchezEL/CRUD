export function listCars(cars) {
  return {
    type: 'LIST_CARS',
    value: cars
  }
}

export function newCar(car) {
  return {
    type: 'CREATE_CAR',
    value: car
  }
}

// export function deleteMovie(movieName) {
//   return {
//     type: 'DELETE_MOVIE',
//     value: movieName
//   }
// }