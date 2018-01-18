import { connect, Dispatch } from 'react-redux';

import WeatherComponent  from './WeatherComponent'; 
import {
  IweatherProps,
  IWeatherState,
} from '../../Interfaces/WeatherInterface';
import { IStoreState, } from '../../Interfaces/StoreInterface';
import { 
  weatherReportAction,
  weatherAction
} from '../../actions/weatherReport';

const mapStateToProps = ({ main, coord }: IStoreState) => {
  return {
    main,
    coord,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    weatherReportAction: (cityName: IWeatherState) => dispatch(weatherReportAction(cityName))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);