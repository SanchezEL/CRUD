import React, { Component, Fragment } from 'react'
// import styled from 'styled-components'
import ListOfCars from '../containers/ListOfCarsContainer'
// import MovieActions from '../containers/MovieActions'

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
// `
// const FlexWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

class Home extends Component {
  componentDidMount() {
    fetch('/cars')
      .then(res => res.json())
      .then(cars => this.props.ListOfCars(cars))
      .catch(() => this.props.ListOfCars([]))
  }

  render() {
    return (
      <Fragment>
        {/* <Center> */}
          <h1>Movie Tickets</h1>
        {/* </Center>
        <Center>
          <FlexWrapper>
            <MovieList />
            <MovieActions />
          </FlexWrapper>
        </Center> */}
      </Fragment>
    )
  }
}

export default Home