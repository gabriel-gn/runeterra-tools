import {
    CARD_REGION_ABBREVIATION,
    CardRegionAbbreviation,
    OriginRegionAbbreviation,
    RiotLoRCard
} from "../riot-assets/models-cards";
import {RiotLorFormat} from "../riot-assets/models-globals";

export interface DeckbuildingRules {
    name: string,
    abbreviation: CardRegionAbbreviation | OriginRegionAbbreviation // as described in riot globals.regions
    doesDeckMeetCondition: (lorDeck: LoRDeck) => boolean;
    doesCardMeetCondition: (card: RiotLoRCard) => boolean;
}

export interface DeckCard {
    card: RiotLoRCard;
    count: number;
}

export interface LoRDeck {
    code: string;
    cards: {
        champions: DeckCard[];
        followers: DeckCard[];
        spells: DeckCard[];
        landmarks: DeckCard[];
        equipments: DeckCard[];
    };
    cardCostQt: {
        [cardCost: number]: number
    };
    mainFactions: CardRegionAbbreviation[] | CARD_REGION_ABBREVIATION[];
    factions: CardRegionAbbreviation[] | CARD_REGION_ABBREVIATION[];
    essenceCost: number;
    factionCardsQt: { [faction: string]: number }; // {DE: 34, BC: 6, NX: 0, IO: 0, etc...}
}

export interface DeckStats {
    playRatePercent?: number;
    winRatePercent?: number;
    matchesQt?: number;
}

export interface UserDeck {
    title?: string;
    description?: string;
    badges?: {
        tier?: string
        formats?: RiotLorFormat[]
    };
    changedAt?: number;
    createdAt?: number;
    stats?: DeckStats;
    username: string;
    deck: LoRDeck;
    relatedDecks?: LoRDeck[];
}
