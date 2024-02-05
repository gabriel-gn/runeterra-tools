import {RIOT_LOR_RARITY_REF} from "./models-globals";

export interface RiotLoRTPoCItem {
  assetAbsolutePath: string
  assetFullAbsolutePath: string
  description: string
  descriptionRaw: string
  name: string
  itemCode: string
  rarity: string
  rarityRef: RIOT_LOR_RARITY_REF
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
  rarityRef: RIOT_LOR_RARITY_REF
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
  rarityRef: RIOT_LOR_RARITY_REF
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