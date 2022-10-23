import {
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
    regions: string[]; // eg: ['Ionia', 'Noxus']
    regionRefs: RiotLoRRegionRef[]; // eg: ['BandleCity', 'ShadowIsles']
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
    spellSpeed: string; // eg: "Fast"
    spellSpeedRef: '' | RiotLorSpellSpeedRef; // eg: "Burst"
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

export type CardRegionAbbreviation =
    'DE'
    | 'FR'
    | 'IO'
    | 'NX'
    | 'PZ'
    | 'SI'
    | 'BW'
    | 'MT'
    | 'SH'
    | 'BC'
    | 'RU'

export enum RegionAbbreviation {
    Demacia = 'DE',
    Freljord = 'FR',
    Ionia = 'IO',
    Noxus = 'NX',
    PiltoverZaun = 'PZ',
    ShadowIsles = 'SI',
    Bilgewater = 'BW',
    Targon = 'MT',
    Shurima = 'SH',
    BandleCity = 'BC',
    Runeterra = 'RU',
}

export function isCardRegionAbbreviation(variable: any): boolean {
    return [
        'DE',
        'FR',
        'IO',
        'NX',
        'PZ',
        'SI',
        'BW',
        'MT',
        'SH',
        'BC',
        'RU',
    ].includes(`${variable}`);
}