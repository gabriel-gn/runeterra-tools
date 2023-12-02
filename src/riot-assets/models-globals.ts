// this is an auto-generated file from generate-riot-globals.ts

import { DeckCard, LoRDeck } from "../deck-utils/models";
import { intersection } from "lodash";
import { RiotLoRCard } from "./models-cards";

export interface RiotLoRGlobalVocabTerm {
  description: string;
  name: string;
  nameRef: RiotLorVocabTerm;
}

export interface RiotLoRGlobalKeyword {
  description: string;
  name: string;
  nameRef: RiotLorKeywordRef;
}

export interface RiotLoRGlobalRegion {
  abbreviation: string;
  iconAbsolutePath: string;
  name: string;
  nameRef: RiotLorRegionRef | RiotLorOriginRegionRef;
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

export enum RIOT_LOR_FORMAT {
  COMMONS_ONLY = "client_Formats_CommonsOnly_name",
  ETERNAL = "client_Formats_Eternal_name",
  EVEN_COST_CARDS = "client_Formats_EvenCostCards_name",
  SINGLETON = "client_Deckbuilder_RulesFilters_Singleton",
  STANDARD = "client_Formats_Standard_name",
}

// [...new Set(cards.map(c => c.formatRefs).flat())]
export type RiotLorFormat =
  | RIOT_LOR_FORMAT.COMMONS_ONLY
  | RIOT_LOR_FORMAT.ETERNAL
  | RIOT_LOR_FORMAT.EVEN_COST_CARDS
  | RIOT_LOR_FORMAT.SINGLETON
  | RIOT_LOR_FORMAT.STANDARD;

export function isRiotLorFormat(variable: any): boolean {
  return Object.values(RIOT_LOR_FORMAT)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export function isRiotLorStandardFormat(variable: any): boolean {
  if (Array.isArray(variable)) {
    return variable.some((f) => `${f}` === RIOT_LOR_FORMAT.STANDARD);
  } else {
    return `${variable}` === RIOT_LOR_FORMAT.STANDARD;
  }
}

export function getRiotLorDeckFormats(deck: LoRDeck): RiotLorFormat[] {
  const deckCards: RiotLoRCard[] = Object.keys(deck.cards)
    // @ts-ignore
    .map((k) => deck.cards[k].map((c: DeckCard) => c.card))
    .flat();
  const formatRefs: RiotLorFormat[] = intersection(
    ...deckCards.map((c) => c.formatRefs),
  );
  return formatRefs;
}

export enum RIOT_LOR_KEYWORD_REF {
  ATTACH = "Attach",
  ATTACK = "AttackSkillMark",
  ATTUNE = "Attune",
  AUGMENT = "Augment",
  BANDLE_CITY = "BandleCity",
  BARRIER = "Barrier",
  BILGEWATER = "Bilgewater",
  BLOCKS_ELUSIVE = "BlocksElusive",
  BOON = "Boon",
  BRASH = "Brash",
  BURST = "Burst",
  CAN_T_BLOCK = "CantBlock",
  CAPTURE = "Capture",
  CHALLENGER = "Challenger",
  COUNTDOWN = "Countdown",
  CURSE = "Curse",
  DAYBREAK = "Daybreak",
  DEATHLESS = "Deathless",
  DEEP = "Deep",
  DEMACIA = "Demacia",
  DOUBLE_ATTACK = "DoubleStrike",
  DRAIN = "Drain",
  ELEMENTAL_SKILL = "ElementalSkill",
  ELUSIVE = "Elusive",
  ENLIGHTENED = "Enlightened",
  EPHEMERAL = "Ephemeral",
  EQUIPMENT = "Equipment",
  EVOLVE = "Evolve",
  FAST = "Fast",
  FATED = "Fated",
  FEARSOME = "Fearsome",
  FLEETING = "Fleeting",
  FLOW = "Flow",
  FOCUS = "Focus",
  FORMIDABLE = "Formidable",
  FRELJORD = "Freljord",
  FROSTBITE = "Frostbite",
  FURY = "Fury",
  HALLOWED = "Hallowed",
  IMBUE = "Imbue",
  IMMOBILE = "Immobile",
  IMPACT = "Impact",
  INVOKE = "Invoke",
  IONIA = "Ionia",
  LANDMARK = "LandmarkVisualOnly",
  LAST_BREATH = "LastBreath",
  LEVEL_UP = "LevelUp",
  LIFESTEAL = "Lifesteal",
  LURK = "Lurker",
  NAB = "Nab",
  NIGHTFALL = "Nightfall",
  NOXUS = "Noxus",
  OVERWHELM = "Overwhelm",
  PILTOVER_ZAUN = "PiltoverZaun",
  PLAY = "PlaySkillMark",
  PLUNDER = "Plunder",
  QUICK_ATTACK = "QuickStrike",
  RECALL = "Recall",
  REGENERATION = "Regeneration",
  RUNETERRA = "Runeterra",
  SCOUT = "Scout",
  SHADOW_ISLES = "ShadowIsles",
  SHURIMA = "Shurima",
  SILENCED = "Silenced",
  SKILL = "Skill",
  SLOW = "Slow",
  SPELLSHIELD = "SpellShield",
  STUN = "Stun",
  SUPPORT = "Support",
  TARGON = "MtTargon",
  TOUGH = "Tough",
  TRAP = "Autoplay",
  VULNERABLE = "Vulnerable",
  WEAKEST = "Weakest",
}

export type RiotLorKeywordRef =
  | RIOT_LOR_KEYWORD_REF.ATTACH
  | RIOT_LOR_KEYWORD_REF.ATTACK
  | RIOT_LOR_KEYWORD_REF.ATTUNE
  | RIOT_LOR_KEYWORD_REF.AUGMENT
  | RIOT_LOR_KEYWORD_REF.BANDLE_CITY
  | RIOT_LOR_KEYWORD_REF.BARRIER
  | RIOT_LOR_KEYWORD_REF.BILGEWATER
  | RIOT_LOR_KEYWORD_REF.BLOCKS_ELUSIVE
  | RIOT_LOR_KEYWORD_REF.BOON
  | RIOT_LOR_KEYWORD_REF.BRASH
  | RIOT_LOR_KEYWORD_REF.BURST
  | RIOT_LOR_KEYWORD_REF.CAN_T_BLOCK
  | RIOT_LOR_KEYWORD_REF.CAPTURE
  | RIOT_LOR_KEYWORD_REF.CHALLENGER
  | RIOT_LOR_KEYWORD_REF.COUNTDOWN
  | RIOT_LOR_KEYWORD_REF.CURSE
  | RIOT_LOR_KEYWORD_REF.DAYBREAK
  | RIOT_LOR_KEYWORD_REF.DEATHLESS
  | RIOT_LOR_KEYWORD_REF.DEEP
  | RIOT_LOR_KEYWORD_REF.DEMACIA
  | RIOT_LOR_KEYWORD_REF.DOUBLE_ATTACK
  | RIOT_LOR_KEYWORD_REF.DRAIN
  | RIOT_LOR_KEYWORD_REF.ELEMENTAL_SKILL
  | RIOT_LOR_KEYWORD_REF.ELUSIVE
  | RIOT_LOR_KEYWORD_REF.ENLIGHTENED
  | RIOT_LOR_KEYWORD_REF.EPHEMERAL
  | RIOT_LOR_KEYWORD_REF.EQUIPMENT
  | RIOT_LOR_KEYWORD_REF.EVOLVE
  | RIOT_LOR_KEYWORD_REF.FAST
  | RIOT_LOR_KEYWORD_REF.FATED
  | RIOT_LOR_KEYWORD_REF.FEARSOME
  | RIOT_LOR_KEYWORD_REF.FLEETING
  | RIOT_LOR_KEYWORD_REF.FLOW
  | RIOT_LOR_KEYWORD_REF.FOCUS
  | RIOT_LOR_KEYWORD_REF.FORMIDABLE
  | RIOT_LOR_KEYWORD_REF.FRELJORD
  | RIOT_LOR_KEYWORD_REF.FROSTBITE
  | RIOT_LOR_KEYWORD_REF.FURY
  | RIOT_LOR_KEYWORD_REF.HALLOWED
  | RIOT_LOR_KEYWORD_REF.IMBUE
  | RIOT_LOR_KEYWORD_REF.IMMOBILE
  | RIOT_LOR_KEYWORD_REF.IMPACT
  | RIOT_LOR_KEYWORD_REF.INVOKE
  | RIOT_LOR_KEYWORD_REF.IONIA
  | RIOT_LOR_KEYWORD_REF.LANDMARK
  | RIOT_LOR_KEYWORD_REF.LAST_BREATH
  | RIOT_LOR_KEYWORD_REF.LEVEL_UP
  | RIOT_LOR_KEYWORD_REF.LIFESTEAL
  | RIOT_LOR_KEYWORD_REF.LURK
  | RIOT_LOR_KEYWORD_REF.NAB
  | RIOT_LOR_KEYWORD_REF.NIGHTFALL
  | RIOT_LOR_KEYWORD_REF.NOXUS
  | RIOT_LOR_KEYWORD_REF.OVERWHELM
  | RIOT_LOR_KEYWORD_REF.PILTOVER_ZAUN
  | RIOT_LOR_KEYWORD_REF.PLAY
  | RIOT_LOR_KEYWORD_REF.PLUNDER
  | RIOT_LOR_KEYWORD_REF.QUICK_ATTACK
  | RIOT_LOR_KEYWORD_REF.RECALL
  | RIOT_LOR_KEYWORD_REF.REGENERATION
  | RIOT_LOR_KEYWORD_REF.RUNETERRA
  | RIOT_LOR_KEYWORD_REF.SCOUT
  | RIOT_LOR_KEYWORD_REF.SHADOW_ISLES
  | RIOT_LOR_KEYWORD_REF.SHURIMA
  | RIOT_LOR_KEYWORD_REF.SILENCED
  | RIOT_LOR_KEYWORD_REF.SKILL
  | RIOT_LOR_KEYWORD_REF.SLOW
  | RIOT_LOR_KEYWORD_REF.SPELLSHIELD
  | RIOT_LOR_KEYWORD_REF.STUN
  | RIOT_LOR_KEYWORD_REF.SUPPORT
  | RIOT_LOR_KEYWORD_REF.TARGON
  | RIOT_LOR_KEYWORD_REF.TOUGH
  | RIOT_LOR_KEYWORD_REF.TRAP
  | RIOT_LOR_KEYWORD_REF.VULNERABLE
  | RIOT_LOR_KEYWORD_REF.WEAKEST;

export function isRiotLorKeywordRef(variable: any): boolean {
  return Object.values(RIOT_LOR_KEYWORD_REF)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_RARITY_REF {
  COMMON = "Common",
  CHAMPION = "Champion",
  EPIC = "Epic",
  NONE = "None",
  RARE = "Rare",
}

export type RiotLorRarityRef =
  | RIOT_LOR_RARITY_REF.COMMON
  | RIOT_LOR_RARITY_REF.CHAMPION
  | RIOT_LOR_RARITY_REF.EPIC
  | RIOT_LOR_RARITY_REF.NONE
  | RIOT_LOR_RARITY_REF.RARE;

export function isRiotLorRarityRef(variable: any): boolean {
  return Object.values(RIOT_LOR_RARITY_REF)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_REGION_REF {
  BANDLE_CITY = "BandleCity",
  BILGEWATER = "Bilgewater",
  DEMACIA = "Demacia",
  FRELJORD = "Freljord",
  IONIA = "Ionia",
  NOXUS = "Noxus",
  PILTOVER_ZAUN = "PiltoverZaun",
  RUNETERRA = "Runeterra",
  SHADOW_ISLES = "ShadowIsles",
  SHURIMA = "Shurima",
  TARGON = "Targon",
}

export type RiotLorRegionRef =
  | RIOT_LOR_REGION_REF.BANDLE_CITY
  | RIOT_LOR_REGION_REF.BILGEWATER
  | RIOT_LOR_REGION_REF.DEMACIA
  | RIOT_LOR_REGION_REF.FRELJORD
  | RIOT_LOR_REGION_REF.IONIA
  | RIOT_LOR_REGION_REF.NOXUS
  | RIOT_LOR_REGION_REF.PILTOVER_ZAUN
  | RIOT_LOR_REGION_REF.RUNETERRA
  | RIOT_LOR_REGION_REF.SHADOW_ISLES
  | RIOT_LOR_REGION_REF.SHURIMA
  | RIOT_LOR_REGION_REF.TARGON;

export function isRiotLorRegionRef(variable: any): boolean {
  return Object.values(RIOT_LOR_REGION_REF)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_REGION_ABBREVIATION {
  BANDLE_CITY = "BC",
  BILGEWATER = "BW",
  DEMACIA = "DE",
  FRELJORD = "FR",
  IONIA = "IO",
  NOXUS = "NX",
  PILTOVER_ZAUN = "PZ",
  RUNETERRA = "RU",
  SHADOW_ISLES = "SI",
  SHURIMA = "SH",
  TARGON = "MT",
}

export type RiotLorRegionAbbreviation =
  | RIOT_LOR_REGION_ABBREVIATION.BANDLE_CITY
  | RIOT_LOR_REGION_ABBREVIATION.BILGEWATER
  | RIOT_LOR_REGION_ABBREVIATION.DEMACIA
  | RIOT_LOR_REGION_ABBREVIATION.FRELJORD
  | RIOT_LOR_REGION_ABBREVIATION.IONIA
  | RIOT_LOR_REGION_ABBREVIATION.NOXUS
  | RIOT_LOR_REGION_ABBREVIATION.PILTOVER_ZAUN
  | RIOT_LOR_REGION_ABBREVIATION.RUNETERRA
  | RIOT_LOR_REGION_ABBREVIATION.SHADOW_ISLES
  | RIOT_LOR_REGION_ABBREVIATION.SHURIMA
  | RIOT_LOR_REGION_ABBREVIATION.TARGON;

export function isRiotLorRegionAbbreviation(variable: any): boolean {
  return Object.values(RIOT_LOR_REGION_ABBREVIATION)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_ORIGIN_REGION_REF {
  AATROX = "Aatrox",
  BARD = "Bard",
  ELDER_DRAGON = "ElderDragon",
  EVELYNN = "Evelynn",
  JAX = "Jax",
  JHIN = "Jhin",
  KAYN = "Kayn",
  NEEKO = "Neeko",
  PORO_KING = "PoroKing",
  RYZE = "Ryze",
  VARUS = "Varus",
}

export type RiotLorOriginRegionRef =
  | RIOT_LOR_ORIGIN_REGION_REF.AATROX
  | RIOT_LOR_ORIGIN_REGION_REF.BARD
  | RIOT_LOR_ORIGIN_REGION_REF.ELDER_DRAGON
  | RIOT_LOR_ORIGIN_REGION_REF.EVELYNN
  | RIOT_LOR_ORIGIN_REGION_REF.JAX
  | RIOT_LOR_ORIGIN_REGION_REF.JHIN
  | RIOT_LOR_ORIGIN_REGION_REF.KAYN
  | RIOT_LOR_ORIGIN_REGION_REF.NEEKO
  | RIOT_LOR_ORIGIN_REGION_REF.PORO_KING
  | RIOT_LOR_ORIGIN_REGION_REF.RYZE
  | RIOT_LOR_ORIGIN_REGION_REF.VARUS;

export function isRiotLorOriginRegionRef(variable: any): boolean {
  return Object.values(RIOT_LOR_ORIGIN_REGION_REF)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_ORIGIN_REGION_ABBREVIATION {
  AATROX = "Aatrox",
  BARD = "Bard",
  ELDER_DRAGON = "ELD",
  EVELYNN = "Evelynn",
  JAX = "Jax",
  JHIN = "Jhin",
  KAYN = "Kayn",
  NEEKO = "Neeko",
  PORO_KING = "POROKING",
  RYZE = "RYZE",
  VARUS = "Varus",
}

export type RiotLorOriginRegionAbbreviation =
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.AATROX
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.BARD
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.ELDER_DRAGON
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.EVELYNN
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.JAX
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.JHIN
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.KAYN
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.NEEKO
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.PORO_KING
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.RYZE
  | RIOT_LOR_ORIGIN_REGION_ABBREVIATION.VARUS;

export function isRiotLorOriginRegionAbbreviation(variable: any): boolean {
  return Object.values(RIOT_LOR_ORIGIN_REGION_ABBREVIATION)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_SET {
  FOUNDATIONS = "Set1",
  RISING_TIDES = "Set2",
  CALL_OF_THE_MOUNTAIN = "Set3",
  EMPIRES_OF_THE_ASCENDED = "Set4",
  BEYOND_THE_BANDLEWOOD = "Set5",
  WORLDWALKER = "Set6",
  THE_DARKIN_SAGA = "Set6cde",
  GLORY_IN_NAVORI = "Set7",
  HEART_OF_THE_HUNTRESS = "Set7b",
  FATE_S_VOYAGE = "Set8",
  EVENTS = "SetEvent",
}

export type RiotLorSet =
  | RIOT_LOR_SET.FOUNDATIONS
  | RIOT_LOR_SET.RISING_TIDES
  | RIOT_LOR_SET.CALL_OF_THE_MOUNTAIN
  | RIOT_LOR_SET.EMPIRES_OF_THE_ASCENDED
  | RIOT_LOR_SET.BEYOND_THE_BANDLEWOOD
  | RIOT_LOR_SET.WORLDWALKER
  | RIOT_LOR_SET.THE_DARKIN_SAGA
  | RIOT_LOR_SET.GLORY_IN_NAVORI
  | RIOT_LOR_SET.HEART_OF_THE_HUNTRESS
  | RIOT_LOR_SET.FATE_S_VOYAGE
  | RIOT_LOR_SET.EVENTS;

export function isRiotLorSet(variable: any): boolean {
  return Object.values(RIOT_LOR_SET)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_SPELL_SPEED_REF {
  BURST = "Burst",
  FAST = "Fast",
  SLOW = "Slow",
}

export type RiotLorSpellSpeedRef =
  | RIOT_LOR_SPELL_SPEED_REF.BURST
  | RIOT_LOR_SPELL_SPEED_REF.FAST
  | RIOT_LOR_SPELL_SPEED_REF.SLOW;

export function isRiotLorSpellSpeedRef(variable: any): boolean {
  return Object.values(RIOT_LOR_SPELL_SPEED_REF)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}

export enum RIOT_LOR_VOCAB_TERM {
  ADVANCE = "Advance",
  ALLEGIANCE = "Allegiance",
  AMBUSH = "Ambush",
  ASSIMILATE = "Assimilate",
  ATTACK = "Attack",
  ATTACK_STRIKE = "AttackStrike",
  AUTO_EQUIP = "AutoEquip",
  BEHOLD = "Behold",
  BLADE_DANCE = "BladeDance",
  BUFFED = "Buffed",
  COST = "Cost",
  COUNTDOWN = "Countdown",
  DISGUISE = "Disguise",
  ELEMENTAL_SKILL = "ElementalSkill",
  EMPOWERED = "Empowered",
  EQUIP = "Equip",
  EVERYWHERE = "Everywhere",
  FLOW = "Flow",
  FOE = "Foe",
  FORGE = "Forge",
  HEALTH = "Health",
  IMPROVISE = "Improvise",
  MANIFEST = "Manifest",
  NEXUS_STRIKE = "NexusStrike",
  OBLITERATE = "Obliterate",
  ORIGIN = "Origin",
  PHASE = "Phase",
  PLAY = "Play",
  POWER = "PathPower",
  PREDICT = "Predict",
  RALLY = "Rally",
  REFORGE = "Reforge",
  REPUTATION = "Reputation",
  RESTORE_THE_SUN_DISC = "SunDiscRestore",
  ROUND_END = "RoundEnd",
  ROUND_START = "RoundStart",
  SILENCE = "Silence",
  SLAY = "Slay",
  SPAWN = "Spawn",
  STRIKE = "Strike",
  STRONGEST = "Strongest",
  TITANIC = "Titanic",
  TOSS = "Toss",
  UPDRAFT = "Updraft",
}

export type RiotLorVocabTerm =
  | RIOT_LOR_VOCAB_TERM.ADVANCE
  | RIOT_LOR_VOCAB_TERM.ALLEGIANCE
  | RIOT_LOR_VOCAB_TERM.AMBUSH
  | RIOT_LOR_VOCAB_TERM.ASSIMILATE
  | RIOT_LOR_VOCAB_TERM.ATTACK
  | RIOT_LOR_VOCAB_TERM.ATTACK_STRIKE
  | RIOT_LOR_VOCAB_TERM.AUTO_EQUIP
  | RIOT_LOR_VOCAB_TERM.BEHOLD
  | RIOT_LOR_VOCAB_TERM.BLADE_DANCE
  | RIOT_LOR_VOCAB_TERM.BUFFED
  | RIOT_LOR_VOCAB_TERM.COST
  | RIOT_LOR_VOCAB_TERM.COUNTDOWN
  | RIOT_LOR_VOCAB_TERM.DISGUISE
  | RIOT_LOR_VOCAB_TERM.ELEMENTAL_SKILL
  | RIOT_LOR_VOCAB_TERM.EMPOWERED
  | RIOT_LOR_VOCAB_TERM.EQUIP
  | RIOT_LOR_VOCAB_TERM.EVERYWHERE
  | RIOT_LOR_VOCAB_TERM.FLOW
  | RIOT_LOR_VOCAB_TERM.FOE
  | RIOT_LOR_VOCAB_TERM.FORGE
  | RIOT_LOR_VOCAB_TERM.HEALTH
  | RIOT_LOR_VOCAB_TERM.IMPROVISE
  | RIOT_LOR_VOCAB_TERM.MANIFEST
  | RIOT_LOR_VOCAB_TERM.NEXUS_STRIKE
  | RIOT_LOR_VOCAB_TERM.OBLITERATE
  | RIOT_LOR_VOCAB_TERM.ORIGIN
  | RIOT_LOR_VOCAB_TERM.PHASE
  | RIOT_LOR_VOCAB_TERM.PLAY
  | RIOT_LOR_VOCAB_TERM.POWER
  | RIOT_LOR_VOCAB_TERM.PREDICT
  | RIOT_LOR_VOCAB_TERM.RALLY
  | RIOT_LOR_VOCAB_TERM.REFORGE
  | RIOT_LOR_VOCAB_TERM.REPUTATION
  | RIOT_LOR_VOCAB_TERM.RESTORE_THE_SUN_DISC
  | RIOT_LOR_VOCAB_TERM.ROUND_END
  | RIOT_LOR_VOCAB_TERM.ROUND_START
  | RIOT_LOR_VOCAB_TERM.SILENCE
  | RIOT_LOR_VOCAB_TERM.SLAY
  | RIOT_LOR_VOCAB_TERM.SPAWN
  | RIOT_LOR_VOCAB_TERM.STRIKE
  | RIOT_LOR_VOCAB_TERM.STRONGEST
  | RIOT_LOR_VOCAB_TERM.TITANIC
  | RIOT_LOR_VOCAB_TERM.TOSS
  | RIOT_LOR_VOCAB_TERM.UPDRAFT;

export function isRiotLorVocabTerm(variable: any): boolean {
  return Object.values(RIOT_LOR_VOCAB_TERM)
    .map((i) => `${i}`)
    .includes(`${variable}`);
}
