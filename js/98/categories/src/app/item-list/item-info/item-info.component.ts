import { Component, Input, OnInit } from '@angular/core';
import Item from '../../shared/Item';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent {
  @Input() item!: Item;
}
