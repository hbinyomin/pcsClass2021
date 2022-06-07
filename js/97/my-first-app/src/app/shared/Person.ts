import { Address } from "./Address";

export interface Person {
  firstName: string;
  lastName: string;
  address: Address;
  birthdate: Date;
  //friends: string[] | null;
  friends?: string[];
}
