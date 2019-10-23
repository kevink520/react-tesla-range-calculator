import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import { counterDefaultVal } from '../constants/counterDefaultVal';
import { speedUp, speedDown } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentValue: state.config.speed,
  initValues: counterDefaultVal.speed,
});

const TeslaSpeedCounterContainer = connect(mapStateToProps, {
  increment: speedUp,
  decrement: speedDown,
})(TeslaCounter);

export default TeslaSpeedCounterContainer;

