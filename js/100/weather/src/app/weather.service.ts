import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather, WeatherServerResponse } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _lastZip?: string;

  get lastZip() {
    return this._lastZip;
  }

  constructor(private httpClient: HttpClient) { }

  getWeather(zip: string): Observable<Weather> {
    this._lastZip = zip;
    
    const appId = 'cb7c71219cf09eb0bb414b932669be97';
    return this.httpClient.get<WeatherServerResponse>(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${appId}&units=imperial&lang=he`)
      .pipe(map(data => {
        return {
          place: data.name,
          icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          details: `${data.weather[0].description} and ${data.main.temp}`
        }
      }));
  }
}
