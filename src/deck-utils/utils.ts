import {CardRegionAbbreviation, RegionAbbreviation, RiotLoRCard} from "../riot-assets/models-cards";
import {DeckCard, LoRDeck} from "./models";
import {
    getCardMainRegion, getCardType,
    regionAbbreviationToRegionRef
} from "../card-utils/utils";
import _ from "lodash";
import {RIOT_LOR_SPELL_SPEED_REF} from "../riot-assets/models-globals";
import {CARD_TYPE} from "../card-utils/models";

export const regionRules: {
    name: string,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => boolean;
    doesCardMeetCondition: (card: RiotLoRCard) => boolean;
}[] = [
    {
        name: 'BandleCity',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('BandleCity'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('BandleCity');
        },
    },
    {
        name: 'Bilgewater',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Bilgewater'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Bilgewater');
        },
    },
    {
        name: 'Demacia',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Demacia'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Demacia');
        },
    },
    {
        name: 'Freljord',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Freljord'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Freljord');
        },
    },
    {
        name: 'Ionia',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Ionia'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Ionia');
        },
    },
    {
        name: 'Noxus',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Noxus'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Noxus');
        },
    },
    {
        name: 'PiltoverZaun',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('PiltoverZaun'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('PiltoverZaun');
        },
    },
    {
        name: 'ShadowIsles',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('ShadowIsles'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('ShadowIsles');
        },
    },
    {
        name: 'Shurima',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Shurima'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Shurima');
        },
    },
    {
        name: 'Targon',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            return lorDeck.cards.champions.concat(lorDeck.cards.followers).some((c: DeckCard) => c.card.regionRefs.includes('Targon'));
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.regionRefs.includes('Targon');
        },
    }
]

export const championOriginRules: {
    name: string,
    doesDeckMeetCondition: (lorDeck: LoRDeck) => boolean;
    doesCardMeetCondition: (card: RiotLoRCard) => boolean;
}[] = [
    {
        name: 'The Virtuoso',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU002 is "Jhin"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU002');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // Jhin can put in deck any follower with skill
            // TODO associated cards não é obrigatório! Isso deve ser alterado de forma a descobrir de outra forma
            return getCardType(card) === CARD_TYPE.FOLLOWER
                && card?.associatedCards
                && card.associatedCards.some((c: DeckCard) => c.card.keywordRefs.includes('Skill'));
        },
    },
    {
        name: 'The Wandering Caretaker',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU001 is "Bard"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU001');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // 06RU001T3 is "chime"'s code
            return card.associatedCardRefs.includes('06RU001T3');
        },
    },
    {
        name: 'Agony\'s Embrace',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU025 is "Evelynn"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU025');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
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
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU005 is "Kayn"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU005');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
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
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU008 is "Jax"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU008');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // "WEAPONMASTER" is jax's deckbuilding condition
            const weaponmasterSubtypeLanguages = [
                'WEAPONMASTER', // en_us
                'MESTRE DE ARMAS', // pt_br
            ];
            return card.subtypes.some(s => weaponmasterSubtypeLanguages.some(c => c.includes(s)));
        },
    },
    {
        name: 'The Arrow of Retribution',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU005 is "Varus"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU009');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // "CULTIST" is kayn's deckbuilding condition
            const cultistSubtypeLanguages = [
                'CULTIST', // en_us
                'CULTISTA', // pt_br
            ];
            return card.subtypes.some(s => cultistSubtypeLanguages.some(c => c.includes(s)));
        },
    },
    {
        name: 'The Arrow of Retribution',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU009 is "Varus"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU009');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // "CULTIST" is varus's deckbuilding condition
            const cultistSubtypeLanguages = [
                'CULTIST', // en_us
                'CULTISTA', // pt_br
            ];
            return card.subtypes.some(s => cultistSubtypeLanguages.some(c => c.includes(s)));
        },
    },
    {
        name: 'The Rune Mage',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU006 is "Ryze"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU006');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.spellSpeedRef === RIOT_LOR_SPELL_SPEED_REF.BURST
                    // TODO checar se a spell é target
            ;
        },
    },
    {
        name: 'The World Ender',
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU026 is "Aatrox"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU026');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // "DARKIN" is aatrox's deckbuilding condition
            const darkinSubtypeLanguages = [
                'DARKIN', // en_us
                'DARKIN', // pt_br
            ];
            return card.subtypes.some(s => darkinSubtypeLanguages.some(d => d.includes(s)));
        },
    },
];

export function getCardMainRegionFromDeck(card: RiotLoRCard, lorDeck: LoRDeck): CardRegionAbbreviation {
    const originRules = championOriginRules.filter(r => r.doesDeckMeetCondition(lorDeck)); // pode se encaixar em multiplas regras de origin

    if (originRules.length > 0 && originRules.some(r => r.doesCardMeetCondition(card))) {
        return RegionAbbreviation.Runeterra;
    } else {
        return getCardMainRegion(card, lorDeck.mainFactions.map(f => regionAbbreviationToRegionRef(f)));
    }
}

export function generateDeckName(deck: LoRDeck) {
    let name = '';
    if (deck.cards.champions.length > 0) {
        name = _.orderBy(deck.cards.champions, ['count', 'card.cardCode', 'card.set'], ['desc', 'asc'])
            .slice(0, 2)
            .map(champion => champion.card.name).join(' / ');
    } else {
        name = 'No Champions';
    }
    return name;
}
