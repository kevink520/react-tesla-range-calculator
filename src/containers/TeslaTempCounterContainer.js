import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import { counterDefaultVal } from '../constants/counterDefaultVal';
import { temperatureUp, temperatureDown } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentValue: state.config.temperature,
  initValues: counterDefaultVal.temperature,
});

const TeslaTempCounterContainer = connect(mapStateToProps, {
  increment: temperatureUp,
  decrement: temperatureDown,
})(TeslaCounter);
export default TeslaTempCounterContainer;

