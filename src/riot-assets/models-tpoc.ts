import {RIOT_LOR_RARITY_REF} from "./models-globals";

// temp1 é o en_us.json do assets/tpoc
// [...new Set([...temp1.items, ...temp1.powers, ...temp1.relics].map(i => i.rarityRef))]
export enum RIOT_LOR_TPOC_RARITY_REF {
  COMMON = 'Common',
  EPIC = 'Epic',
  LEGENDARY = 'Legendary',
  RARE = 'Rare',
  SPECIAL = 'Special',
}

export type RiotLorTpocRarityRef =
  | RIOT_LOR_TPOC_RARITY_REF.COMMON
  | RIOT_LOR_TPOC_RARITY_REF.EPIC
  | RIOT_LOR_TPOC_RARITY_REF.LEGENDARY
  | RIOT_LOR_TPOC_RARITY_REF.RARE
  | RIOT_LOR_TPOC_RARITY_REF.SPECIAL;

export function isRiotLorTpocRarityRef(variable: any): boolean {
  return Object.values(RIOT_LOR_TPOC_RARITY_REF)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export interface RiotLoRTPoCItem {
  assetAbsolutePath: string
  assetFullAbsolutePath: string
  description: string
  descriptionRaw: string
  name: string
  itemCode: string
  rarity: string
  rarityRef: RIOT_LOR_TPOC_RARITY_REF
}

export function isRiotLoRTPoCItem(object: any): boolean {
  return object.hasOwnProperty('assetAbsolutePath')
    && object.hasOwnProperty('assetFullAbsolutePath')
    && object.hasOwnProperty('description')
    && object.hasOwnProperty('descriptionRaw')
    && object.hasOwnProperty('name')
    && object.hasOwnProperty('itemCode')
    && object.hasOwnProperty('rarity')
    && object.hasOwnProperty('rarityRef')
}

export interface RiotLoRTPoCRelic {
  assetAbsolutePath: string
  assetFullAbsolutePath: string
  description: string
  descriptionRaw: string
  name: string
  relicCode: string
  rarity: string
  rarityRef: RIOT_LOR_TPOC_RARITY_REF
}

export function isRiotLoRTPoCRelic(object: any): boolean {
  return object.hasOwnProperty('assetAbsolutePath')
    && object.hasOwnProperty('assetFullAbsolutePath')
    && object.hasOwnProperty('description')
    && object.hasOwnProperty('descriptionRaw')
    && object.hasOwnProperty('name')
    && object.hasOwnProperty('relicCode')
    && object.hasOwnProperty('rarity')
    && object.hasOwnProperty('rarityRef')
}

export interface RiotLoRTPoCPower {
  assetAbsolutePath: string
  assetFullAbsolutePath: string
  description: string
  descriptionRaw: string
  name: string
  powerCode: string
  rarity: string
  rarityRef: RIOT_LOR_TPOC_RARITY_REF
}

export function isRiotLoRTPoCPower(object: any): boolean {
  return object.hasOwnProperty('assetAbsolutePath')
  && object.hasOwnProperty('assetFullAbsolutePath')
  && object.hasOwnProperty('description')
  && object.hasOwnProperty('descriptionRaw')
  && object.hasOwnProperty('name')
  && object.hasOwnProperty('powerCode')
  && object.hasOwnProperty('rarity')
  && object.hasOwnProperty('rarityRef')
}