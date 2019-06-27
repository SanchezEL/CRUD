import React from 'react'
import { Link } from 'react-router-dom'

export default function ListOfCars(props) {
  console.log(props)
  return (
    <div>
      {
        props.cars.map((car, index) => (
       <p
        key={index}>{car.brand} {car.model}
        {/* <Link to={`/cars/${car._id}`}>details</Link> */}
        </p>
      ))
      }
    </div>
  )
  
}

