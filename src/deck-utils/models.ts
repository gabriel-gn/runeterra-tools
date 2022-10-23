import {CardRegionAbbreviation, RiotLoRCard} from "../riot-assets/models-cards";

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
    mainFactions: CardRegionAbbreviation[];
    factions: CardRegionAbbreviation[];
    essenceCost: number;
    factionCardsQt: { [faction: string]: number }; // {DE: 34, BC: 6, NX: 0, IO: 0, etc...}
}