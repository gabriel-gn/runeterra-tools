import {DeckbuildingRule, DeckCard, LoRDeck} from "./models";
import {RiotLoRCard} from "../riot-assets/models-cards";
import {RIOT_LOR_REGION_ABBREVIATION, RIOT_LOR_REGION_REF} from "../riot-assets/models-globals";
import {getAllCardsFromDeck} from "./utils";

export const regionDeckbuildingRules: DeckbuildingRule[] = [
    {
        name: 'BandleCity',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.BANDLE_CITY,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.BANDLE_CITY));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.BANDLE_CITY);
        },
    },
    {
        name: 'Bilgewater',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.BILGEWATER,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.BILGEWATER));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.BILGEWATER);
        },
    },
    {
        name: 'Demacia',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.DEMACIA,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.DEMACIA));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.DEMACIA);
        },
    },
    {
        name: 'Freljord',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.FRELJORD,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.FRELJORD));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.FRELJORD);
        },
    },
    {
        name: 'Ionia',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.IONIA,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.IONIA));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.IONIA);
        },
    },
    {
        name: 'Noxus',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.NOXUS,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.NOXUS));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.NOXUS);
        },
    },
    {
        name: 'PiltoverZaun',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.PILTOVER_ZAUN,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.PILTOVER_ZAUN));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.PILTOVER_ZAUN);
        },
    },
    {
        name: 'ShadowIsles',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.SHADOW_ISLES,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.SHADOW_ISLES));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.SHADOW_ISLES);
        },
    },
    {
        name: 'Shurima',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.SHURIMA,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.SHURIMA));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.SHURIMA);
        },
    },
    {
        name: 'Targon',
        abbreviation: RIOT_LOR_REGION_ABBREVIATION.TARGON,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.TARGON));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.TARGON);
        },
    }
]
