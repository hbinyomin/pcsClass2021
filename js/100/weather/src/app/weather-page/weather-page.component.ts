import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit /*, OnDestroy*/ {
  subscription!: Subscription;
  selectedWeather?: Observable<Weather | null>;// | null;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //const zip = this.route.snapshot.params['zip'];
    //const zip = this.route.snapshot.paramMap.get('zip');

    /*this.subscription = this.route.params.subscribe(params => {
      const zip = params['zip'];
      if (zip) {
        this.selectedWeather = this.weatherService.getWeather(zip);
      }
    });*/

    this.selectedWeather = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let zip = params.get('zip');
        if (! zip) {
          zip = this.weatherService.lastZip || '';
          if (zip) {
            this.router.navigate(['weather', {zip: zip}]);
            return of(null);
          }
        }
        if (zip) {
          return this.weatherService.getWeather(zip);
        }
        return of(null);
      }));
  }

  /*ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }*/
}
