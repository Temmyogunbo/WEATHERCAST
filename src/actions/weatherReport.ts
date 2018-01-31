
import axios from 'axios';

import  * as types from '../types'
import {
   IWeatherActionCreator,
   IWeatherReport,
   IWeatherState
   } from '../Interfaces/WeatherInterface';

export const weatherReportCreator = (weatherReport: IWeatherReport): IWeatherActionCreator => {
 return {
   type: types.LOAD_WEATHER_REPORT,
   weatherReport
 }
};

export type weatherAction = IWeatherActionCreator;

export const weatherReportAction = (cityName: IWeatherState) => ((dispatch: any) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName.city + '&appid=' + process.env.API_KEY + '&units=metric')
    .then((response)=> {
     dispatch(weatherReportCreator(response.data))
      })
    .catch((error)=>console.log(error))
  
});

 export default { weatherReportAction,}