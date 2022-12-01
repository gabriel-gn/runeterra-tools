import {CARD_REGION_ABBREVIATION, CardRegionAbbreviation, RiotLoRCard} from "../riot-assets/models-cards";

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
    badges?: {tier?: string};
    changedAt?: number;
    createdAt?: number;
    stats?: DeckStats;
    username: string;
    deck: LoRDeck;
    relatedDecks?: LoRDeck[];
}
