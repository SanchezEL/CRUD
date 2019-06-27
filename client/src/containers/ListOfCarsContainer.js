import {connect} from 'react-redux'
import ListOfUsers from '../components/ListOfCars'

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }

}
export default connect(mapStateToProps,null)(ListOfUsers)