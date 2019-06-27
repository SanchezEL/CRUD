import { connect } from 'react-redux'
import CreateCar from '../components/CreateCar'
import { newCar } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    newCar: (car) => dispatch(newCar(car)),
  }
}

export default connect(null, mapDispatchToProps)(CreateCar)