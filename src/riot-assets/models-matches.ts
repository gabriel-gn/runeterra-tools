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
  game_outcome: string;
  order_of_play: number;
}

export interface LoRMatchExtendedPlayer extends LoRMatchPlayer {
  riotId?: RiotID; // não originário da chamada original
  deck?: LoRDeck; // não originário da chamada original
}

export interface LoRMatchInfo {
  game_mode: string;
  game_type: string;
  game_start_time_utc: Date;
  game_version: string;
  players: LoRMatchPlayer[];
  total_turn_count: number;
}

export interface LoRMatch {
  metadata: LoRMatchMetadata;
  info: LoRMatchInfo;
}