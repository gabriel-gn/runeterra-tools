import {DeckbuildingRule, DeckCard, LoRDeck} from "./models";
import {CARD_REGION_ABBREVIATION, RiotLoRCard} from "../riot-assets/models-cards";
import {RIOT_LOR_REGION_REF} from "../riot-assets/models-globals";
import {getAllCardsFromDeck} from "./utils";

export const regionDeckbuildingRules: DeckbuildingRule[] = [
    {
        name: 'BandleCity',
        abbreviation: CARD_REGION_ABBREVIATION.BANDLE_CITY,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.BANDLE_CITY));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.BANDLE_CITY);
        },
    },
    {
        name: 'Bilgewater',
        abbreviation: CARD_REGION_ABBREVIATION.BILGEWATER,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.BILGEWATER));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.BILGEWATER);
        },
    },
    {
        name: 'Demacia',
        abbreviation: CARD_REGION_ABBREVIATION.DEMACIA,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.DEMACIA));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.DEMACIA);
        },
    },
    {
        name: 'Freljord',
        abbreviation: CARD_REGION_ABBREVIATION.FRELJORD,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.FRELJORD));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.FRELJORD);
        },
    },
    {
        name: 'Ionia',
        abbreviation: CARD_REGION_ABBREVIATION.IONIA,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.IONIA));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.IONIA);
        },
    },
    {
        name: 'Noxus',
        abbreviation: CARD_REGION_ABBREVIATION.NOXUS,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.NOXUS));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.NOXUS);
        },
    },
    {
        name: 'PiltoverZaun',
        abbreviation: CARD_REGION_ABBREVIATION.PILTOVER_ZAUN,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.PILTOVER_ZAUN));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.PILTOVER_ZAUN);
        },
    },
    {
        name: 'ShadowIsles',
        abbreviation: CARD_REGION_ABBREVIATION.SHADOW_ISLES,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.SHADOW_ISLES));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.SHADOW_ISLES);
        },
    },
    {
        name: 'Shurima',
        abbreviation: CARD_REGION_ABBREVIATION.SHURIMA,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.SHURIMA));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.SHURIMA);
        },
    },
    {
        name: 'Targon',
        abbreviation: CARD_REGION_ABBREVIATION.TARGON,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return getAllCardsFromDeck(lorDeck).some((c: DeckCard) => c.card.regionRefs.includes(RIOT_LOR_REGION_REF.TARGON));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes(RIOT_LOR_REGION_REF.TARGON);
        },
    }
]
