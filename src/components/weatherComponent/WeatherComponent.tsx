import * as React from 'react';
import {connect, } from 'react-redux';

import {
  IWeatherProps, 
  IWeatherState,
} from '../../Interfaces/WeatherInterface';
import { IStoreState, } from '../../Interfaces/StoreInterface';
import {
  weatherReportAction,
  weatherAction
} from '../../actions/weatherReport';

/**
 * This class represents the weather component
 *
 * @class WeatherCompnent
 * 
 * @returns jsx {object}
 * 
 * @extends {React.Component<IWeatherProps, IWeatherState>}
 */
@(connect((state: IStoreState) => {
  return {
    main: state.main,
    coord: state.coord
  }
}) as any)


export class WeatherComponent extends React.Component <IWeatherProps, IWeatherState>{
  
  constructor(props: IWeatherProps) {
    super(props);
    this.state = { city: '',};

  }
  
  public handleSubmit = (event: any) => {
    event.preventDefault();

    this.props.dispatch(weatherReportAction(this.state));
  };

  public handleChange = (event: any) => {
    this.setState({[event.target.name]: event.target.value})
  }

  /**
   * render
   */
  public render() {
    return (
      <div>
        <h5>{'Enter your desired city name:'}</h5>
        <form  onSubmit={this.handleSubmit}>
        <input name="city" value={this.state.city} onChange={this.handleChange} />
          <button type="submit">search</button>
        </form>
        {this.props.main
          && <h5>{this.state.city} is on temperature of {this.props.main.temp} degree celsius:</h5>
          
        }
      </div>
    )
  }
}

export default WeatherComponent;