import {CardRegionAbbreviation, RegionAbbreviation, RiotLoRCard} from "../riot-assets/models-cards";
import {DeckCard, LoRDeck} from "./models";
import {
    getCardMainRegion,
    regionAbbreviationToRegionRef
} from "../card-utils/utils";

export const originRules: {
    name: string,
    condition: (lorDeck: LoRDeck) => boolean;
    rule: (card: RiotLoRCard) => boolean;
}[] = [
    {
        name: 'The Virtuoso',
        condition: (lorDeck: LoRDeck) => {
            // 06RU002 is "Jhin"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU002');
        },
        rule: (card: RiotLoRCard) => {
            // Jhin can put in deck any card with skill
            // TODO associated cards não é obrigatório! Isso deve ser alterado de forma a descobrir de outra forma
            return card?.associatedCards
                && card.associatedCards.some((c: DeckCard) => c.card.keywordRefs.includes('Skill'));
        },
    },
    {
        name: 'The Wandering Caretaker',
        condition: (lorDeck: LoRDeck) => {
            // 06RU001 is "Bard"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU001');
        },
        rule: (card: RiotLoRCard) => {
            // 06RU001T3 is "chime"'s code
            return card.associatedCardRefs.includes('06RU001T3');
        },
    },
    {
        name: 'Agony\'s Embrace',
        condition: (lorDeck: LoRDeck) => {
            // 06RU025 is "Evelynn"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU025');
        },
        rule: (card: RiotLoRCard) => {
            // List all hust invoking cards
            const evelynnCards = [
                '06RU025',
                '06SI020',
                '06DE030',
                '06SI019',
                '06SH034',
                '06SI018',
                '06PZ025',
                '06BW018',
            ];
            return evelynnCards.includes(card.cardCode);
        },
    },
    {
        name: 'The Shadow Reaper',
        condition: (lorDeck: LoRDeck) => {
            // 06RU005 is "Kayn"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU005');
        },
        rule: (card: RiotLoRCard) => {
            // "CULTIST" is kayn's deckbuilding condition
            const cultistSubtypeLanguages = [
                'CULTIST', // en_us
                'CULTISTA', // pt_br
            ];
            return card.subtypes.some(s => cultistSubtypeLanguages.some(c => c.includes(s)));
        },
    },
    {
        name: 'Grandmaster At Arms',
        condition: (lorDeck: LoRDeck) => {
            // 06RU008 is "Jax"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU008');
        },
        rule: (card: RiotLoRCard) => {
            // "WEAPONMASTER" is jax's deckbuilding condition
            const weaponmasterSubtypeLanguages = [
                'WEAPONMASTER', // en_us
                'MESTRE DE ARMAS', // pt_br
            ];
            return card.subtypes.some(s => weaponmasterSubtypeLanguages.some(c => c.includes(s)));
        },
    },
];

export function getCardMainRegionFromDeck(card: RiotLoRCard, lorDeck: LoRDeck): CardRegionAbbreviation {
    const altRules = originRules.filter(r => r.condition(lorDeck)); // pode se encaixar em multiplas regras de origin

    if (altRules.length > 0 && altRules.some(r => r.rule(card))) {
        return RegionAbbreviation.Runeterra;
    } else {
        return getCardMainRegion(card, lorDeck.mainFactions.map(f => regionAbbreviationToRegionRef(f)));
    }
}