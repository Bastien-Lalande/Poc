import { item } from "../items/item";
import { Pokemon } from "../pokemons/Pokemon";

export class Player {
  name: string;
  bag: item[];
  pokemon: Pokemon[];

  constructor() {
    this.name = "Bem";
    this.bag = [];
    this.pokemon = [];
  }
}
