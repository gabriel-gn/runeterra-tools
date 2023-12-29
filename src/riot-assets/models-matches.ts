import {LoRDeck} from "../deck-utils/models";

export type LoRServerRegion = 'americas' | 'europe' | 'sea';
export const LoRServerRegionQuery = ['americas', 'europe', 'sea'];

export enum RiotLoRAPIEndpoints {
  AMERICAS = `https://americas.api.riotgames.com`,
  EUROPE = `https://europe.api.riotgames.com`,
  SEA = `https://asia.api.riotgames.com`,
}

export interface RiotID {
  puuid: string;
  gameName: string;
  tagLine: string;
  activeShard: LoRServerRegion;
}

export interface LoRMatchMetadata {
  data_version: string;
  match_id: string;
  participants: string[];
}

export interface LoRMatchPlayer {
  puuid: string;
  deck_id: string;
  deck_code: string;
  factions: string[];
  game_outcome: 'win' | 'loss' | 'tie';
  order_of_play: number;
}

export interface LoRMatchExtendedPlayer extends LoRMatchPlayer {
  riotId?: RiotID; // não originário da chamada original
  deck?: LoRDeck; // não originário da chamada original
}

export interface LoRMatchInfo {
  game_mode: 'Constructed' | 'AI' | 'ThePathOfChampions' | string;
  game_type: 'Ranked' | string;
  game_start_time_utc: string;
  game_version: string;
  players: (LoRMatchPlayer | LoRMatchExtendedPlayer)[];
  total_turn_count: number;
}

export interface LoRMatch {
  metadata: LoRMatchMetadata;
  info: LoRMatchInfo;
}