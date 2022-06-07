import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Category from '../shared/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() categories!: Category[];
  @Input() selectedIndex = 0;
  @Output() selectedIndexChanged = new EventEmitter<number>();

  //selectedCategory?: Category;
  //selectedIndex = 1;

  //categorySelected(/*event: Event*/ selection: string) {
  //const selection = (event.target as HTMLSelectElement)?.value;
  //console.log(selection);
  //this.selectedCategory = this.categories.find(c => c.name === selection);
  //this.selectedIndex = this.categories.findIndex(c => c.name === selection);
  //this.selectedIndex = Number(selection);
  //this.selectedIndexChanged.emit(this.selectedIndex);
  //}

  handleSelectedIndexChanged() {
    this.selectedIndexChanged.emit(this.selectedIndex);
  }
}
