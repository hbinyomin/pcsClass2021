import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';
import ZipChooser from './ZipChooser';

class App extends Component {
  state = {
    zip: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.zip !== this.state.zip && this.state.zip.length === 5) {
      this.getWeather();
    }
  }

  zipChanged = /*async*/ e => {
    /*await*/ this.setState({
    zip: e.target.value
  });

    /*if (e.target.value.length >= 5) {
      this.getWeather();
    }*/
  }

  getWeather = async () => {
    const appId = '<your key here>';

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=${appId}&units=imperial&lang=he`)

      const weatherData = await response.json();

      if (!response.ok) {
        throw new Error(`${weatherData.message || response.statusText}`);
      }

      console.log(weatherData);

      this.setState({
        weather: {
          city: weatherData.name,
          icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          details: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
        },
        error: null
      });
    }
    catch (e) {
      console.error(e.message);

      this.setState({
        error: e.message,
        weather: null
      });
    }
  }

  render() {
    const weather = this.state.weather ?
      <WeatherDetails weather={this.state.weather} /> :
      <div>please enter a zip code for weather</div>;
    const error = this.state.error ?
      <div className="alert alert-danger">{this.state.error}</div> :
      null;

    return (
      <div className="container text-center">
        <div className="row">
          <ZipChooser zip={this.state.zip} zipChanged={this.zipChanged} />
        </div>
        {weather}
        {error}
      </div>
    );
  }
}

export default App;
