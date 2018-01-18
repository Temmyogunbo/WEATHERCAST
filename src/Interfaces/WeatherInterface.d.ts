import * as types from '../types';

export interface IWeatherState {
  city: string,
} 

export interface  IweatherProps{
    main: {
      temp: number;
      pressure: number;
      humidity: number;
    };
    coord: {
      long: number;
      lat: number
    };
    weatherReportAction: (cityName: IWeatherState) => any;

}

export interface IweatherReport {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  coord: {
    long: number;
    lat: number
  };
}

export interface IweatherAction {
  type: types.LOAD_WEATHER_REPORT;
  weatherReport: IweatherReport;
}