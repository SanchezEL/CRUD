import React, { Component } from "react";
import "./App.css";
import ListOfCarsContainer from "./containers/ListOfCarsContainer";
import CreateCar from "./containers/CreateCarContainer"

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ListOfCarsContainer/>
        <CreateCar />
      </div>
    );
  }
}
export default (App);


