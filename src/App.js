import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TeslaCarContainer from './containers/TeslaCarContainer';
import TeslaStatsContainer from './containers/TeslaStatsContainer';
import TeslaSpeedCounterContainer from './containers/TeslaSpeedCounterContainer';
import TeslaTempCounterContainer from './containers/TeslaTempCounterContainer';
import TeslaClimateContainer from './containers/TeslaClimateContainer';
import TeslaWheelsContainer from './containers/TeslaWheelsContainer';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';
import './App.css';
import Header from './components/Header/Header';
import appReducer from './reducers/teslaRangeApp';

const store = createStore(appReducer,
                          window.__REDUX_DEVTOOLS_EXTENSION &&
                          window.__REDUX_DEVTOOLS_EXTENSION());
    
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="wrapper">
            <form className="tesla-battery">
              <h1 className="title-animation">Range Per Charge</h1>
              <TeslaCarContainer />
              <TeslaStatsContainer />
              <div className="tesla-controls tesla-controls-animation cf">
                <TeslaSpeedCounterContainer />
                <div className="tesla-climate-container cf">
                  <TeslaTempCounterContainer />
                  <TeslaClimateContainer />
                </div>
                <TeslaWheelsContainer />
              </div>   
              <TeslaNotice />
            </form>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
