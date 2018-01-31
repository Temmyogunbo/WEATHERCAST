import  * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import WeatherContainer from '../weatherComponent/WeatherComponent';
import configureStore from '../../store';

const store = configureStore({});

export const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Route path='/' component={WeatherContainer} />
    </Router>
    </Provider>
  )
}
export default App;