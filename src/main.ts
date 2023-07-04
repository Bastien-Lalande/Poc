import { fight } from "./fight/fight";
import { Player } from "./player/player";
import { Pokemon } from "./pokemons/Pokemon";
import { pikachu } from "./pokemons/pikachu";

export const go = async () => {
  const player: Player = new Player();
  player.name = "BamBam";
  const pokemon1: Pokemon = new pikachu();
  player.pokemon = [pokemon1];
  fight(player);
};
