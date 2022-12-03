import {
    RIOT_LOR_REGION_REF,
    RIOT_LOR_SPELL_SPEED_REF,
    RiotLoRKeywordRef,
    RiotLorRarityRef,
    RiotLoRRegionRef,
    RiotLorSet,
    RiotLorSpellSpeedRef
} from './models-globals';

export interface RiotLoRCard {
    associatedCards: any[]; // eg:
    associatedCardRefs: string[]; // eg: ['01PZ033T1']
    assets: {
        gameAbsolutePath: string;
        fullAbsolutePath: string;
    }[];
    regions: string[]; // eg: ['Ionia', 'Ilhas das Sombras']
    regionRefs: RiotLoRRegionRef[] | RIOT_LOR_REGION_REF[]; // eg: ['BandleCity', 'ShadowIsles']
    attack: number; // eg: 3
    cost: number; // eg: 2
    health: number; // eg: 1
    description: string; // eg: 'When you <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> or <link=keyword.Recall><style=Keyword>Recall</style></link> an enemy, I deal 2 to it.'
    descriptionRaw: string; // eg: 'When you Stun or Recall an enemy, I deal 2 to it.'
    levelupDescription: string; // eg: "I've seen myself or my shadows <link=vocab.Strike><style=Vocab>strike</style></link> the enemy Nexus twice.<style=Variable></style>"
    levelupDescriptionRaw: string; // eg: "I've seen myself or my shadows strike the enemy Nexus twice."
    flavorText: string; // eg: '"...always by my side."'
    artistName: string; // eg: 'Wild Blue Studios'
    name: string; // eg: 'Yasuo'
    cardCode: string; // eg: '01IO015'
    keywords: string[]; // eg: ['Quick Attack', 'Formidable']
    keywordRefs: RiotLoRKeywordRef[]; // eg: ['CantBlock', 'LastBreath']
    spellSpeed: string; // eg: "Rápida"
    spellSpeedRef: '' | RiotLorSpellSpeedRef | RIOT_LOR_SPELL_SPEED_REF; // eg: "Burst"
    rarity: string; // eg: 'COMUM'
    rarityRef: RiotLorRarityRef; // eg: 'Common'
    subtypes: string[]; // eg: ['CELESTIAL', 'DRAGON']. In the card game it only shows in the card the first one (this one is for the Great Beyond)
    supertype: string; // eg: 'Campeão'
    type: string; // eg: 'Feitiço'
    collectible: boolean; // eg: true
    set: RiotLorSet; // eg: 'Set1'
}

export function isRiotLoRCard(object: any) {
    return object.hasOwnProperty('associatedCards')
        && object.hasOwnProperty('associatedCardRefs')
        && object.hasOwnProperty('assets')
        && object.hasOwnProperty('regions')
        && object.hasOwnProperty('regionRefs')
        && object.hasOwnProperty('attack')
        && object.hasOwnProperty('cost')
        && object.hasOwnProperty('health')
        && object.hasOwnProperty('description')
        && object.hasOwnProperty('descriptionRaw')
        && object.hasOwnProperty('levelupDescription')
        && object.hasOwnProperty('levelupDescriptionRaw')
        && object.hasOwnProperty('flavorText')
        && object.hasOwnProperty('artistName')
        && object.hasOwnProperty('name')
        && object.hasOwnProperty('cardCode')
        && object.hasOwnProperty('keywords')
        && object.hasOwnProperty('keywordRefs')
        && object.hasOwnProperty('spellSpeed')
        && object.hasOwnProperty('spellSpeedRef')
        && object.hasOwnProperty('rarity')
        && object.hasOwnProperty('rarityRef')
        && object.hasOwnProperty('subtypes')
        && object.hasOwnProperty('supertype')
        && object.hasOwnProperty('type')
        && object.hasOwnProperty('collectible')
        && object.hasOwnProperty('set')
}

// riot globals.regions
export enum ORIGIN_REGION_ABBREVIATION {
    JHIN = "Jhin",
    BARD = "Bard",
    EVELYNN = "Evelynn",
    KAYN = "Kayn",
    JAX = "Jax",
    VARUS = "Varus",
    AATROX = "Aatrox",
    RYZE = "RYZE",
}

export type OriginRegionAbbreviation =
    `${ORIGIN_REGION_ABBREVIATION.JHIN}`
    | `${ORIGIN_REGION_ABBREVIATION.BARD}`
    | `${ORIGIN_REGION_ABBREVIATION.EVELYNN}`
    | `${ORIGIN_REGION_ABBREVIATION.KAYN}`
    | `${ORIGIN_REGION_ABBREVIATION.JAX}`
    | `${ORIGIN_REGION_ABBREVIATION.VARUS}`
    | `${ORIGIN_REGION_ABBREVIATION.AATROX}`
    | `${ORIGIN_REGION_ABBREVIATION.RYZE}`

export function isOriginRegionAbbreviation(variable: any): boolean {
    return Object.values(ORIGIN_REGION_ABBREVIATION).map(i => `${i}`).includes(`${variable}`);
}

// riot globals.regions
export enum CARD_REGION_ABBREVIATION {
    DEMACIA = 'DE',
    FRELJORD = 'FR',
    IONIA = 'IO',
    NOXUS = 'NX',
    PILTOVER_ZAUN = 'PZ',
    SHADOW_ISLES = 'SI',
    BILGEWATER = 'BW',
    TARGON = 'MT',
    SHURIMA = 'SH',
    BANDLE_CITY = 'BC',
    RUNETERRA = 'RU',
}

export type CardRegionAbbreviation =
    `${CARD_REGION_ABBREVIATION.DEMACIA}`
    | `${CARD_REGION_ABBREVIATION.FRELJORD}`
    | `${CARD_REGION_ABBREVIATION.IONIA}`
    | `${CARD_REGION_ABBREVIATION.NOXUS}`
    | `${CARD_REGION_ABBREVIATION.PILTOVER_ZAUN}`
    | `${CARD_REGION_ABBREVIATION.SHADOW_ISLES}`
    | `${CARD_REGION_ABBREVIATION.BILGEWATER}`
    | `${CARD_REGION_ABBREVIATION.TARGON}`
    | `${CARD_REGION_ABBREVIATION.SHURIMA}`
    | `${CARD_REGION_ABBREVIATION.BANDLE_CITY}`
    | `${CARD_REGION_ABBREVIATION.RUNETERRA}`

export function isCardRegionAbbreviation(variable: any): boolean {
    return Object.values(CARD_REGION_ABBREVIATION).map(i => `${i}`).includes(`${variable}`);
}
