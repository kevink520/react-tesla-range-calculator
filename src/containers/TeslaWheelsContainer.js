import TeslaWheels from '../components/TeslaWheels/TeslaWheels';
import { changeWheel } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.config.wheels,
});

const TeslaWheelsContainer = connect(mapStateToProps, { handleChangeWheels: changeWheel })(TeslaWheels);
export default TeslaWheelsContainer;

