import TeslaClimate from '../components/TeslaClimate/TeslaClimate';
import { changeClimate } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.config.climate,
  limit: state.config.temperature > 10,
});

const TeslaClimateContainer = connect(mapStateToProps, { handleChangeClimate: changeClimate })(TeslaClimate);
export default TeslaClimateContainer;

