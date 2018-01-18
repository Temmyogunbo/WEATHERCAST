import * as React from 'react';
import {connect, Dispatch} from 'react-redux';

import {
  IweatherProps, 
  IWeatherState,
} from '../../Interfaces/WeatherInterface';
import { IStoreState, } from '../../Interfaces/StoreInterface';

export class WeatherComponent extends React.Component <IweatherProps, IWeatherState>{
  
  constructor(props: IweatherProps) {
    super(props);
    this.state = { city: '',};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
 public handleSubmit(event: any) {
   event.preventDefault();
   this.props.weatherReportAction(this.state)   
 };

  public handleChange(event: any){
    this.setState({[event.target.name]: event.target.value})
  }

  /**
   * render
   */
  public render() {
    return (
      <div>
        <h5>{'Enter your desired city name:'}</h5>
        <form method="POST" onSubmit={this.handleSubmit}>
        <input name="city" value={this.state.city} onChange={this.handleChange} />
          <button type="submit">search</button>
        </form>
        {this.props.main && <h5>{this.state.city} is on temperature of {this.props.main.temp} degree celsius</h5> }
      </div>
    )
  }
}

export default WeatherComponent;