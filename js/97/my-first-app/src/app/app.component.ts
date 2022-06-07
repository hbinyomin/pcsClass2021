import { Component } from '@angular/core';
import { Order } from './shared/Order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCS HW really long title';
  foo = 0;

  order: Order = {
    customer: {
      firstName: 'Joe',
      lastName: 'Biden',
      birthdate: new Date(1947, 11, 8),
      address: {
        street: '1600 Pennsylvania Ave NW',
        city: 'Washington',
        state: 'DC',
        zip: '20500'
      },
      //friends: ['Nancy', 'Kamala', 'Jill', 'Jen', 'Chuck']
      //friends: null
    },
    item: {
      name: 'Build Back Better',
      price: 10000000
    }
  };

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  onSubmit(formValues: {title: string, foo: number}) {
    console.log('submit', formValues);
  }
}
