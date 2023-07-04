import { attack } from "../attacks/Attack";
import { charge } from "../attacks/charge";
import { Pokemon } from "./Pokemon";

export class pikachu implements Pokemon {
  name: string;
  hp: number;
  type: string;
  sprite: string;
  attack: attack[];
  level: number;
  xp: number;

  constructor() {
    this.name = "pikachu";
    this.hp = 60;
    this.type = "electric";
    this.sprite = "../pokemon/pikachu";
    this.level = 5;
    this.xp = 200;
    //
    const atk1: attack = new charge();
    //
    this.attack = [atk1];
  }
}
