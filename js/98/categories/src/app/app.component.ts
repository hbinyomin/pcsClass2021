import { Component } from '@angular/core';
import Category from './shared/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    {
      name: 'electronics',
      items: [
        {
          name: 'mouse',
          price: 10
        },
        {
          name: 'keyboard',
          price: 20
        }
      ]
    },
    {
      name: 'clothing',
      items: [
        {
          name: 'shirt',
          price: 15
        },
        {
          name: 'hat',
          price: 18
        }
      ]
    },
    {
      name: 'food'//,
      //items: []
    }
  ];

  selectedIndex = 1;
  selectedIndexChanged(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
  }
}
