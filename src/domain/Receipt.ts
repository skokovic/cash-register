import { Item } from './Item'

export interface Receipt {
  id: string;
  datetime: string;
  items: Item[];
}
