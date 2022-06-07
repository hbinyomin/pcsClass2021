import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent {
  zip!: string;

  constructor(private router: Router) { }

  zipChanged() {
    console.log(`Zip changed to ${this.zip}`);

    if (this.zip.length !== 5) {
      return;
    }

    //this.router.navigate(['weather', this.zip]);
    this.router.navigate(['weather', {zip: this.zip}]);
  }
}
