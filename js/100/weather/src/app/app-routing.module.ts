import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherComponent } from './another/another.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';

const routes: Routes = [
  /*{
    path: 'weather',
    component: WeatherFormComponent
  },*/ /*{
    path: 'weather/:zip',
    component: WeatherPageComponent
  },*/{
    path: 'weather',
    component: WeatherPageComponent
  }, {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  }, {
    path: 'another',
    component: AnotherComponent
  },{
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
