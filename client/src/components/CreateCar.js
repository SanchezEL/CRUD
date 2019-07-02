import React, { Component } from 'react'
// import { TextField, Button } from '@material-ui/core'
import newCar from "../actions"



export default class CreateCar extends Component {
  state = {
    brand: '',
    model: '',
    year: '',
    color: '',
  }
  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }
  
  createCar = (e) => {
    e.preventDefault()

    console.log(this.state.year)
    
    fetch('/cars', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brand: this.state.brand,
        model: this.state.model,
        year: this.state.year,
        color: this.state.color
      })
    })
    .then(res => res.json())
    .then(result => {
      this.props.newCar(result)
      console.log(result, "res")
    })
    
    .then(() => {
      this.setState({
        brand: '',
        model: '',
        year: '',
        color: ''
      })
    })
  }

  // createCar = (e) => {
  //   e.preventDefault()
  //   console.log(this.state, "sads")
  //   this.props.newCar(this.state)
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.createCar}>
          <input
            type="text"
            onChange={this.handleTextChange}
            id="brand"
            label="brand"
            value={this.state.brand}/>
          <input
            type="text"
            onChange={this.handleTextChange}
            id="model"
            label="model"
            value={this.state.model}/>
          <input
            type="text"
            onChange={this.handleTextChange}
            id="year"
            label="year"
            value={this.state.year}/>
          <input
            type="text"
            onChange={this.handleTextChange}
            id="color"
            label="color"
            value={this.state.color}/>
          <button type="submit" variant="contained">Create Car</button>
        </form>
        {/* <form>
          Brand: <br></br>
          <input type="text"></input>
          Model: <br></br>
          <input type="text"></input>
          Year: <br></br>
          <input type="text"></input>
          Color: <br></br>
          <input type="text"></input>
          <input type="submit" onSubmit={newCar} value="Submit"></input>
        </form> */}
      </div>
    )
  }
}
