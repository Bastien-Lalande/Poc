import { attack } from "./Attack";

export class charge implements attack {
  readonly name: string;
  readonly type: string;
  power: number;
  pm: number;

  constructor() {
    this.name = "charge";
    this.type = "normal";
    this.power = 20;
    this.pm = 20;
  }
}
