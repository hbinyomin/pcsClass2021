import { Item } from "./Item";
import { Person } from "./Person";

export interface Order {
  customer: Person;
  item: Item;
}
