import {DeckCard, isLoRDeck, LoRDeck} from "../deck-utils/models";
import {intersection} from "lodash";
import {RiotLoRCard} from "./models-cards";

// [...new Set(cards.map(c => c.keywordRefs).flat(1))]
export type RiotLoRKeywordRef = 'Attach'
    | 'Attune'
    | 'Augment'
    | 'AuraVisualFakeKeyword'
    | 'Autoplay'
    | 'Barrier'
    | 'Boon'
    | 'Brash'
    | 'Burst'
    | 'CantBlock'
    | 'Challenger'
    | 'Countdown'
    | 'Deep'
    | 'DoubleStrike'
    | 'Elusive'
    | 'Ephemeral'
    | 'Equipment'
    | 'Evolve'
    | 'Fast'
    | 'Fearsome'
    | 'Fleeting'
    | 'Flow'
    | 'Focus'
    | 'Formidable'
    | 'Fury'
    | 'Hallowed'
    | 'Imbue'
    | 'Immobile'
    | 'Impact'
    | 'LandmarkVisualOnly'
    | 'LastBreath'
    | 'Lifesteal'
    | 'Lurker'
    | 'Overwhelm'
    | 'Plunder'
    | 'QuickStrike'
    | 'Regeneration'
    | 'Scout'
    | 'Skill'
    | 'Slow'
    | 'SpellOverwhelm'
    | 'SpellShield'
    | 'Support'
    | 'Tough'
    | 'Vulnerable'

export function isRiotLoRKeywordRef(variable: any): boolean {
    return [
        'Attach',
        'Attune',
        'Augment',
        'AuraVisualFakeKeyword',
        'Autoplay',
        'Barrier',
        'Boon',
        'Brash',
        'Burst',
        'CantBlock',
        'Challenger',
        'Countdown',
        'Deep',
        'DoubleStrike',
        'Elusive',
        'Ephemeral',
        'Equipment',
        'Evolve',
        'Fast',
        'Fearsome',
        'Fleeting',
        'Flow',
        'Focus',
        'Formidable',
        'Fury',
        'Hallowed',
        'Imbue',
        'Immobile',
        'Impact',
        'LandmarkVisualOnly',
        'LastBreath',
        'Lifesteal',
        'Lurker',
        'Overwhelm',
        'Plunder',
        'QuickStrike',
        'Regeneration',
        'Scout',
        'Skill',
        'Slow',
        'SpellOverwhelm',
        'SpellShield',
        'Support',
        'Tough',
        'Vulnerable',
    ].includes(`${variable}`);
}

export enum RIOT_LOR_REGION_REF {
    DEMACIA = 'Demacia',
    FRELJORD = 'Freljord',
    IONIA = 'Ionia',
    NOXUS = 'Noxus',
    PILTOVER_ZAUN = 'PiltoverZaun',
    SHADOW_ISLES = 'ShadowIsles',
    BILGEWATER = 'Bilgewater',
    TARGON = 'Targon',
    SHURIMA = 'Shurima',
    BANDLE_CITY = 'BandleCity',
    RUNETERRA = 'Runeterra',
}

// [...new Set(cards.map(c => c.regionRefs).flat(1))]
export type RiotLoRRegionRef =
    `${RIOT_LOR_REGION_REF.DEMACIA}`
    | `${RIOT_LOR_REGION_REF.FRELJORD}`
    | `${RIOT_LOR_REGION_REF.IONIA}`
    | `${RIOT_LOR_REGION_REF.NOXUS}`
    | `${RIOT_LOR_REGION_REF.PILTOVER_ZAUN}`
    | `${RIOT_LOR_REGION_REF.SHADOW_ISLES}`
    | `${RIOT_LOR_REGION_REF.BILGEWATER}`
    | `${RIOT_LOR_REGION_REF.TARGON}`
    | `${RIOT_LOR_REGION_REF.SHURIMA}`
    | `${RIOT_LOR_REGION_REF.BANDLE_CITY}`
    | `${RIOT_LOR_REGION_REF.RUNETERRA}`

export function isRiotLoRRegionRef(variable: any): boolean {
    return Object.values(RIOT_LOR_REGION_REF).map(i => `${i}`).includes(`${variable}`);
}

// [...new Set(temp1.map(c => c.spellSpeedRef).flat(1))]
export enum RIOT_LOR_SPELL_SPEED_REF {
    BURST = 'Burst',
    FAST = 'Fast',
    SLOW = 'Slow',
}

export type RiotLorSpellSpeedRef =
    `${RIOT_LOR_SPELL_SPEED_REF.BURST}`
    | `${RIOT_LOR_SPELL_SPEED_REF.FAST}`
    | `${RIOT_LOR_SPELL_SPEED_REF.SLOW}`

export function isRiotLorSpellSpeedRef(variable: any): boolean {
    return Object.values(RIOT_LOR_SPELL_SPEED_REF).map(i => `${i}`).includes(`${variable}`);
}

// [...new Set(temp1.map(c => c.rarityRef).flat(1))]
export type RiotLorRarityRef =
    'Champion'
    | 'Common'
    | 'Epic'
    | 'None'
    | 'Rare'

export function isRiotLorRarityRef(variable: any): boolean {
    return [
        'Champion',
        'Common',
        'Epic',
        'None',
        'Rare',
    ].includes(`${variable}`);
}

export enum RIOT_LOR_SET {
    SET_1 = 'Set1',
    SET_2 = 'Set2',
    SET_3 = 'Set3',
    SET_4 = 'Set4',
    SET_5 = 'Set5',
    SET_6 = 'Set6',
    SET_6_CDE = 'Set6cde',
    SET_7 = 'Set7',
    SET_7_B = 'Set7b',
}

// [...new Set(temp1.map(c => c.set).flat(1))]
export type RiotLorSet =
    `${RIOT_LOR_SET.SET_1}`
    | `${RIOT_LOR_SET.SET_2}`
    | `${RIOT_LOR_SET.SET_3}`
    | `${RIOT_LOR_SET.SET_4}`
    | `${RIOT_LOR_SET.SET_5}`
    | `${RIOT_LOR_SET.SET_6}`
    | `${RIOT_LOR_SET.SET_6_CDE}`
    | `${RIOT_LOR_SET.SET_7}`
    | `${RIOT_LOR_SET.SET_7_B}`

export function isRiotLorSet(variable: any): boolean {
    return Object.values(RIOT_LOR_SET).map(i => `${i}`).includes(`${variable}`);
}

export enum RIOT_LOR_FORMAT {
    ETERNAL = "client_Formats_Eternal_name",
    STANDARD = "client_Formats_Standard_name",
    COMMONS_ONLY = "client_Formats_CommonsOnly_name",
}

// [...new Set(cards.map(c => c.formatRefs).flat())]
export type RiotLorFormat =
    RIOT_LOR_FORMAT.ETERNAL
    | RIOT_LOR_FORMAT.STANDARD
    | RIOT_LOR_FORMAT.COMMONS_ONLY

export function isRiotLorFormat(variable: any): boolean {
    return Object.values(RIOT_LOR_FORMAT).map(i => `${i}`).includes(`${variable}`);
}

export function isRiotLorStandardFormat(variable: any): boolean {
    if (Array.isArray(variable)) {
        return variable.some(f => `${f}` === RIOT_LOR_FORMAT.STANDARD);
    } else {
        return `${variable}` === RIOT_LOR_FORMAT.STANDARD;
    }
}

export function getRiotLorDeckFormats(deck: LoRDeck): RiotLorFormat[] {
    const deckCards: RiotLoRCard[] = Object.keys(deck.cards)
        // @ts-ignore
        .map(k => deck.cards[k].map((c: DeckCard) => c.card))
        .flat()
    const formatRefs: RiotLorFormat[] = intersection(...deckCards.map(c => c.formatRefs));
    return formatRefs;
}

export interface RiotLoRGlobalVocabTerm {
    description: string;
    name: string;
    nameRef: string;
}

export interface RiotLoRGlobalKeyword {
    description: string;
    name: string;
    nameRef: RiotLoRKeywordRef;
}

export interface RiotLoRGlobalRegion {
    abbreviation: string;
    iconAbsolutePath: string;
    name: string;
    nameRef: RiotLoRRegionRef;
}

export interface RiotLoRGlobalSpellSpeed {
    name: string;
    nameRef: RiotLorSpellSpeedRef;
}

export interface RiotLoRGlobalRarity {
    name: string;
    nameRef: RiotLorRarityRef;
}

export interface RiotLoRGlobalSet {
    iconAbsolutePath: string;
    name: string;
    nameRef: RiotLorSet;
}

export interface RiotLoRGlobal {
    vocabTerms: RiotLoRGlobalVocabTerm[];
    keywords: RiotLoRGlobalKeyword[];
    regions: RiotLoRGlobalRegion[];
    spellSpeeds: RiotLoRGlobalSpellSpeed[];
    rarities: RiotLoRGlobalRarity[];
    sets: RiotLoRGlobalSet[];
}
