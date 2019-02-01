import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './searchbar';
import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/circular-progress.css';
import {fetchWeather} from './api';
import WeatherCard from './weathercard';
class App extends Component {
  state = {
    weatherData: null,
    isSearchBarOpened: false,
    isLoading: true
  }

  convertToCelsius = temp => temp - 273.15;

  toggleSearchBar = () =>
    this.setState(({isSearchBarOpened}) => ({isSearchBarOpened: !isSearchBarOpened}))

  getWeatherData = city => fetchWeather(city)


  handleSearchQuery = async (e) => {
    if (e.key === 'Enter') {
      this.setState(() => ({isLoading: true}));
      const data = await this.getWeatherData(e.target.value);
      this.setWeatherData(data);
    }
  }

  setWeatherData = data => this.setState(() => {
      if (data.cod === 200) {
        return {
          weatherData: {
            icon: data.weather[0].icon,
            temp: parseInt(data.main.temp - 273.15),
            pressure: data.main.pressure,
            hum: data.main.humidity,
            weatherStatus: data.weather[0].main,
            city: data.name
          },
          isLoading: false,
        }
      }
      return {
        weatherData: null,
        isLoading: false,
      }
  })

  componentDidMount = async () => {
    const weatherData = await this.getWeatherData('cairo') ;
    this.setWeatherData(weatherData);
  }

  render() {
    const {
      weatherData,
      isSearchBarOpened,
      isLoading,
    } = this.state;

    return (
      <div className="App">
        <Header toggleSearchBar={this.toggleSearchBar}></Header>
        {isSearchBarOpened && (
          <SearchBar
            search={this.handleSearchQuery}
            isOpened={isSearchBarOpened}
            toggleSearchBar={this.toggleSearchBar}
          />
        )}
        <div className="content">
          {
            isLoading
            ? <CircularProgress size="xlarge" />
            : <WeatherCard data={weatherData}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
