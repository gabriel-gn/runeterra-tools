import {
    CardRegionAbbreviation,
    CARD_REGION_ABBREVIATION,
    RiotLoRCard,
    ORIGIN_REGION_ABBREVIATION
} from "../riot-assets/models-cards";
import {DeckbuildingRules, DeckCard, LoRDeck} from "./models";
import {
    getCardMainRegion, getCardType,
    regionAbbreviationToRegionRef, regionRefToRegionAbbreviation
} from "../card-utils/utils";
import _ from "lodash";
import {RIOT_LOR_REGION_REF, RIOT_LOR_SPELL_SPEED_REF} from "../riot-assets/models-globals";
import {CARD_TYPE} from "../card-utils/models";

export const regionRules: DeckbuildingRules[] = [
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

export const championOriginRules: DeckbuildingRules[] = [
    {
        name: 'The Virtuoso',
        abbreviation: ORIGIN_REGION_ABBREVIATION.JHIN,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU002 is "Jhin"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU002');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // Jhin can put in deck any follower with skill
            // TODO associated cards não é obrigatório! Isso deve ser alterado de forma a descobrir de outra forma
            return card.cardCode === '06RU002' || (
                getCardType(card) === CARD_TYPE.FOLLOWER
                && card?.associatedCards
                && card.associatedCards.some((c: DeckCard) => c.card.keywordRefs.includes('Skill'))
            );
        },
    },
    {
        name: 'The Wandering Caretaker',
        abbreviation: ORIGIN_REGION_ABBREVIATION.BARD,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU001 is "Bard"'s code
            return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '06RU001');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            // 06RU001T3 is "chime"'s code
            return card.cardCode === '06RU001' || (
                card.associatedCardRefs.includes('06RU001T3')
            );
        },
    },
    {
        name: 'Agony\'s Embrace',
        abbreviation: ORIGIN_REGION_ABBREVIATION.EVELYNN,
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
            return card.cardCode === '06RU025' || (
                evelynnCards.includes(card.cardCode)
            );
        },
    },
    {
        name: 'The Shadow Reaper',
        abbreviation: ORIGIN_REGION_ABBREVIATION.KAYN,
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
            return card.cardCode === '06RU005' || (
                card.subtypes.some(s => cultistSubtypeLanguages.some(c => c.includes(s)))
            );
        },
    },
    {
        name: 'Grandmaster At Arms',
        abbreviation: ORIGIN_REGION_ABBREVIATION.JAX,
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
            return card.cardCode === '06RU008' || (
                card.subtypes.some(s => weaponmasterSubtypeLanguages.some(c => c.includes(s)))
            );
        },
    },
    {
        name: 'The Arrow of Retribution',
        abbreviation: ORIGIN_REGION_ABBREVIATION.VARUS,
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
            return card.cardCode === '06RU009' || (
                card.subtypes.some(s => cultistSubtypeLanguages.some(c => c.includes(s)))
            );
        },
    },
    {
        name: 'The Rune Mage',
        abbreviation: ORIGIN_REGION_ABBREVIATION.RYZE,
        doesDeckMeetCondition: (lorDeck: LoRDeck) => {
            // 06RU006 is "Ryze"'s code
            return lorDeck.cards.champions.some(c => c.card.cardCode === '06RU006');
        },
        doesCardMeetCondition: (card: RiotLoRCard) => {
            return card.cardCode === '06RU006' || (
                card.spellSpeedRef === RIOT_LOR_SPELL_SPEED_REF.BURST
                // TODO checar se a spell é target
            );
        },
    },
    {
        name: 'The World Ender',
        abbreviation: ORIGIN_REGION_ABBREVIATION.AATROX,
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
            return card.cardCode === '06RU026' || (
                card.subtypes.some(s => darkinSubtypeLanguages.some(d => d.includes(s)))
            );
        },
    },
];

export function getAllCardsFromDeck(lorDeck: LoRDeck): DeckCard[] {
    return [].concat.apply([], Object.keys(lorDeck.cards).map((k: string) => _.get(lorDeck.cards, k)));
}

export function getCardMainRegionFromDeck(card: RiotLoRCard, lorDeck: LoRDeck): CardRegionAbbreviation {
    const originRules = championOriginRules.filter(r => r.doesDeckMeetCondition(lorDeck)); // pode se encaixar em multiplas regras de origin

    if (originRules.length > 0 && originRules.some(r => r.doesCardMeetCondition(card))) {
        return CARD_REGION_ABBREVIATION.RUNETERRA;
    } else {
        return getCardMainRegion(card, lorDeck.mainFactions.map(f => regionAbbreviationToRegionRef(f)));
    }
}

/**
 * retorna as
 * @param lorDeck
 * @param maxRegions
 */
export function getDeckMainRegions(lorDeck: LoRDeck, maxRegions: number = 2): {[abbrv: string]: number} {
    const originRules = championOriginRules.filter(r => r.doesDeckMeetCondition(lorDeck)); // pode se encaixar em multiplas regras de origin

    // regionRefs = {Ionia: 0, BandleCity: 0, Evelynn: 0, ...}
    let regionAbbrvQt: {[abbrv: string]: number} = {};
    [
        ...Object.values(CARD_REGION_ABBREVIATION),
        ...Object.values(ORIGIN_REGION_ABBREVIATION)
    ].forEach(k => {
        regionAbbrvQt[`${k}`] = 0;
    });

    // numero de cartas que podem estar em cada região
    const deckCards: DeckCard[] = getAllCardsFromDeck(lorDeck);

    //{ IO: 25, Evelynn: 21, PZ: 5, ...}
    deckCards.forEach((c: DeckCard) => {
        const rulesCardMeetCondition = [...regionRules, ...originRules];
        rulesCardMeetCondition
            .filter(rule => rule.doesCardMeetCondition(c.card))
            .forEach(rule => {
                regionAbbrvQt[rule.abbreviation] += c.count
            });
    })

    // Ordena do maior para o menor
    regionAbbrvQt = Object.entries(regionAbbrvQt)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    // Remove as regiões que não são do interesse
    Object.keys(regionAbbrvQt).forEach((k, index) => {
        if (index >= maxRegions) {
            delete regionAbbrvQt[k];
        }
    })

    // Cria um novo objeto de "regionAbbrvQt" zerado
    let result: {[abbrv: string]: number} = Object.entries(regionAbbrvQt).reduce((r, [k, v]) => ({ ...r, [k]: 0 }), {});
    const mainRegions = Object.keys(regionAbbrvQt);
    deckCards.forEach((c: DeckCard) => {
        const rulesCardMeetCondition = [...regionRules, ...originRules] // todas as regras
            .filter(rule => mainRegions.includes(rule.abbreviation) && rule.doesCardMeetCondition(c.card)) // regras filtradas
            // .reverse() // ao descomentar essa linha, dá prioridade às regras mais novas
        result[rulesCardMeetCondition[0].abbreviation] += c.count;
    })

    return result
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
