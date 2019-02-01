import React, { Component } from 'react';
import {Icon} from '@rmwc/icon';
import './weathercard.css'

class WeatherCard extends Component {

  render () {
    const {data} = this.props
    return (
      <div className='card-wrapper'>
        {
          data ?
           <React.Fragment>
            <p className='city-name'>{data.city}</p>
            <div className='top-info'>
              <p className='temp-status'>{data.weatherStatus}</p>
              <Icon
                icon={`http://openweathermap.org/img/w/${data.icon}.png`}
              />
            </div>
            <div className='mid-info'>
              <p className='temp'>{data.temp} &#778;</p>
            </div>
            <div>
              <p>Pressure : {data.pressure}</p>
              <p>Hum: {data.hum}</p>
            </div>
           </React.Fragment>
           : <p>not found</p>
        }
      </div>
    )
  }
}

export default WeatherCard
