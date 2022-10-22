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

// [...new Set(cards.map(c => c.regionRefs).flat(1))]
export type RiotLoRRegionRef =
    'BandleCity'
    | 'Bilgewater'
    | 'Demacia'
    | 'Freljord'
    | 'Ionia'
    | 'Noxus'
    | 'PiltoverZaun'
    | 'Runeterra'
    | 'ShadowIsles'
    | 'Shurima'
    | 'Targon'

export function isRiotLoRRegionRef(variable: any): boolean {
    return [
        'BandleCity',
        'Bilgewater',
        'Demacia',
        'Freljord',
        'Ionia',
        'Noxus',
        'PiltoverZaun',
        'Runeterra',
        'ShadowIsles',
        'Shurima',
        'Targon',
    ].includes(`${variable}`);
}

// [...new Set(temp1.map(c => c.spellSpeedRef).flat(1))]
export type RiotLorSpellSpeedRef =
    'Burst'
    | 'Fast'
    | 'Slow'

export function isRiotLorSpellSpeedRef(variable: any): boolean {
    return [
        'Burst',
        'Fast',
        'Slow',
    ].includes(`${variable}`);
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
