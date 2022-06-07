import React from 'react'

//export default function WeatherDetails(props) {
//const { city, icon, details } = props.weather;
export default function WeatherDetails({ weather: { city, icon, details } }) {
  return (
    <>
      <div className="row">
        <div>The weather in {city} is currently</div>
      </div>
      <div className="row">
        <img className="col-3 mx-auto" src={icon} alt="icon would go here..." />
      </div>
      <div className="row">
        <div>{details}</div>
      </div>
    </>
  )
}
