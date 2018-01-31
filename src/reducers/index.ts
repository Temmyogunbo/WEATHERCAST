import * as types from '../types';
import { LOAD_WEATHER_REPORT } from '../types';
import { IStoreState } from '../Interfaces/StoreInterface';
import { IWeatherActionCreator } from '../Interfaces/WeatherInterface';

export const appReducer = (state: IStoreState, action: IWeatherActionCreator) => {

  switch (action.type) {
    case LOAD_WEATHER_REPORT :
      return action.weatherReport 
        
    default:
      return state;
  }
}
