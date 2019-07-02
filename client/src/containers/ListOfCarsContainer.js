import {connect} from 'react-redux'
import ListOfCars from '../components/ListOfCars'

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }

}
export default connect(mapStateToProps,null)(ListOfCars)