import Item from "./Item";

export default interface Category {
  name: string;
  items?: Item[];
}
