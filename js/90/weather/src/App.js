import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';

class App extends Component {
  state = {
    // zips: ['08701', '11230']
  }

  /*componentDidMount() {
    setTimeout(() => { // so we dont pound server on every change...
      this.getWeather(1);
    }, 20000);
  }*/

  getWeather = async (e) => {
    console.log(e);

    const appId = '<your key here>';

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${e.target.value}&appid=${appId}&units=imperial&lang=he`)

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
          {<form className="row row-cols-lg-auto g-3 align-items-center flex-row-reverse">
            <div className="col-12">
              <input type="text" className="form-control" id="zip" placeholder="enter your zip" onBlur={this.getWeather}/>
            </div>
          </form>}
          {/*this.state.zips.map(zip => <div key={zip}>{zip}</div>)*/}
        </div>
        {weather}
        {error}
      </div>
    );
  }
}

export default App;
