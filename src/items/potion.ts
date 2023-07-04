import { item } from "./item";

export class potion implements item {
  name: string;
  description: string | undefined;

  constructor() {
    this.name = "potion";
  }
}
