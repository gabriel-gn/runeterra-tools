// [...new Set(cards.map(c => c.keywordRefs).flat(1))]
export type RiotLoRKeywordRef =
    'Attach'
    | 'Attune'
    | 'Augment'
    | 'AuraVisualFakeKeyword'
    | 'Autoplay'
    | 'Barrier'
    | 'Boon'
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

// [...new Set(temp1.map(c => c.set).flat(1))]
export type RiotLorSet =
    'Set1'
    | 'Set2'
    | 'Set3'
    | 'Set4'
    | 'Set5'
    | 'Set6'
    | 'Set6cde'

export function isRiotLorSet(variable: any): boolean {
    return [
        'Set1',
        'Set2',
        'Set3',
        'Set4',
        'Set5',
        'Set6',
        'Set6cde',
    ].includes(`${variable}`);
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
