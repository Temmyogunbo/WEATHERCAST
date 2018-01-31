import { LOAD_WEATHER_REPORT } from '../types';

export interface IWeatherState {
  city: string;
} 

export interface  IWeatherProps{
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  coord: {
    long: number;
    lat: number;
  };
    dispatch?: (x: any) => void;

}

export interface IWeatherReport {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  coord: {
    long: number;
    lat: number;
  };
}

export interface IWeatherActionCreator {
  type: LOAD_WEATHER_REPORT;
  weatherReport: IWeatherReport;
}