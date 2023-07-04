import { Player } from "../player/player";
import { Pokemon } from "../pokemons/Pokemon";
import { pikachu } from "../pokemons/pikachu";

export const fight = async (player: Player) => {
  const pokemon1: Pokemon = player.pokemon[0];
  const pokemon2: Pokemon = new pikachu();

  while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.hp = 0;
  }
  console.log("fight ended");
};
