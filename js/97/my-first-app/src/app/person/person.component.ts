import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../shared/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person!: Person;

  /*addFriend(event: Event) {
    this.person.friends.push((event.target as HTMLInputElement)?.value);
  }*/

  addFriend(newFriend: string) {
    this.person.friends = this.person.friends || [];
    this.person.friends.push(newFriend);
  }

  removeFriend(index: number) {
    //this.person.friends = this.person.friends.filter(f => f !== friend);
    //const index = this.person.friends.indexOf(friend);
    this.person.friends?.splice(index, 1);
  }
}
