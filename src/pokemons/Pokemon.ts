import { attack } from "../attacks/Attack";

export interface Pokemon {
  name: string;
  hp: number;
  type: string;
  level: number;
  xp: number;
  sprite: string;
  attack: attack[];
}
