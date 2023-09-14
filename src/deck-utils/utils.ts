import {
    CARD_REGION_ABBREVIATION,
    CardRegionAbbreviation,
    ORIGIN_REGION_ABBREVIATION,
    OriginRegionAbbreviation,
    RiotLoRCard
} from "../riot-assets/models-cards";
import {DeckCard, LoRDeck} from "./models";
import _ from "lodash";
import {regionDeckbuildingRules} from "./region-deckbuilding-rules";
import {originDeckbuildingRules} from "./origin-deckbuilding-rules";
import {RIOT_LOR_ORIGIN_REGION_ABBREVIATION} from "../riot-assets/models-globals";

export function getAllCardsFromDeck(lorDeck: LoRDeck): DeckCard[] {
    return [].concat.apply([], Object.keys(lorDeck.cards).map((k: string) => _.get(lorDeck.cards, k)));
}

/**
 *
 * @param card: card to get MainRegion
 * @param lorDeck: if provided, used to get valid origin rules (via .cards) and mainFactions to consider
 * @param factionsToConsider: if provided, does not use lorDeck.mainFactions to consider factions
 */
export function getCardMainRegionFromDeck(
    card: RiotLoRCard,
    lorDeck?: LoRDeck,
    factionsToConsider?: Array<CardRegionAbbreviation | OriginRegionAbbreviation>
): CardRegionAbbreviation | OriginRegionAbbreviation {
    let originRules; // pode se encaixar em multiplas regras de origin
    factionsToConsider = factionsToConsider ? factionsToConsider : []; // caso não seja passado, considera todas

    if (!!lorDeck) {
        originRules = originDeckbuildingRules.filter(r => r.doesDeckMeetCondition(lorDeck));
        if (factionsToConsider?.length === 0) {
            if (lorDeck.mainFactions.length > 0) {
                factionsToConsider = lorDeck.mainFactions
            }
            else if (lorDeck.factions.length > 0) {
                factionsToConsider = lorDeck.factions
            }
        }
    } else {
        originRules = originDeckbuildingRules;
    }
    let rulesToConsider = [...regionDeckbuildingRules, ...originRules] // todas as regras
    factionsToConsider = factionsToConsider.length !== 0 ? factionsToConsider : rulesToConsider.map(r => r.abbreviation)

    const rulesCardMeetCondition = rulesToConsider
        .filter(rule => factionsToConsider?.includes(rule.abbreviation) && rule.doesCardMeetCondition(card)) // regras filtradas
    // .reverse() // ao descomentar essa linha, dá prioridade às regras mais novas
    return rulesCardMeetCondition[0].abbreviation;
}

/**
 * retorna as
 * @param lorDeck
 * @param maxRegions
 */
export function getDeckMainRegions(lorDeck: LoRDeck, maxRegions: number = 2): { [abbrv: string]: number } {
    const originRules = originDeckbuildingRules.filter(r => r.doesDeckMeetCondition(lorDeck)); // pode se encaixar em multiplas regras de origin

    // regionRefs = {Ionia: 0, BandleCity: 0, Evelynn: 0, ...}
    let regionAbbrvQt: { [abbrv: string]: number } = {};
    [
        ...Object.values(CARD_REGION_ABBREVIATION),
        ...Object.values(RIOT_LOR_ORIGIN_REGION_ABBREVIATION)
    ].forEach(k => {
        regionAbbrvQt[`${k}`] = 0;
    });

    // numero de cartas que podem estar em cada região
    const deckCards: DeckCard[] = getAllCardsFromDeck(lorDeck);

    // adiciona a carta em TODAS as regiões que ela pode estar inclusa, NÃO SUBSTITUIR PELO método "getCardMainRegionFromDeck"
    //{ IO: 25, Evelynn: 21, PZ: 5, ...}
    const rulesCardMeetCondition = [...regionDeckbuildingRules, ...originRules];
    deckCards.forEach((c: DeckCard) => {
        rulesCardMeetCondition
            .filter(rule => rule.doesCardMeetCondition(c.card))
            .forEach(rule => {
                regionAbbrvQt[rule.abbreviation] += c.count
            });
    })

    const reorderRegionAbbrvQtAsc = () => {
        regionAbbrvQt = Object.entries(regionAbbrvQt)
            .sort(([, a], [, b]) => b - a)
            .reduce((r, [k, v]) => ({...r, [k]: v}), {});
    }

    // Ordena do maior para o menor
    reorderRegionAbbrvQtAsc();

    // caso todas cartas de determinada regra pertençam também a outra regra, considera apenas a primeira!!
    // CUDACBABB4AQMCRLAEDAAKIBA4AAKAIHBQHQGAIBBAIBSBIBAEAAYAIBAQKACBAHGEAQMABBAEDACFIGAEAQEBIBAEBSEAIBAUSQCAYECMAQIAAIAECQVIAB
    // eg: Poro King / Demacia faz com que as regiões consideradas do deck sejam POROKING/FR, pois qt = {"POROKING": 29, "FR": 15, "DE: 11"}
    deckCards.forEach(c => {
        let mostCardsRegions = Object.keys(regionAbbrvQt);
        const cardRules = rulesCardMeetCondition.filter(rule => rule.doesCardMeetCondition(c.card))
            .sort((a, b) => {
                return mostCardsRegions.indexOf(a.abbreviation) - mostCardsRegions.indexOf(b.abbreviation);
            });
        cardRules.forEach((rule, index) => {
            if (index !== 0) {
                regionAbbrvQt[rule.abbreviation] -= c.count;
            }
        })
    })
    reorderRegionAbbrvQtAsc();

    // Remove as regiões que não são do interesse OU regiões vazias (eg. {SH: 40, DE: 0})
    Object.keys(regionAbbrvQt).forEach((k, index) => {
        if (index >= maxRegions || !regionAbbrvQt[k]) {
            delete regionAbbrvQt[k];
        }
    })

    // Cria um novo objeto de "regionAbbrvQt" zerado
    let result: { [abbrv: string]: number } = Object.entries(regionAbbrvQt).reduce((r, [k, v]) => ({...r, [k]: 0}), {});
    const mainRegions = Object.keys(regionAbbrvQt);

    // Re-avalia as cartas para usar apenas as regras de criação do deck
    deckCards.forEach((c: DeckCard) => {
        const cardMainRegionAbbrv = getCardMainRegionFromDeck(c.card, undefined, mainRegions as CardRegionAbbreviation[])
        result[cardMainRegionAbbrv] += c.count;
    })

    // Ordena do maior para o menor
    result = Object.entries(result)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({...r, [k]: v}), {});

    return result
}

export function generateDeckName(deck: LoRDeck): string {
    let name = '';
    let champions: DeckCard[] = deck?.cards?.champions ?? [];
    if (champions.length > 0) {
        name = (_.orderBy(champions, ['count', 'card.cardCode', 'card.set'], ['desc', 'asc']) as DeckCard[])
            .slice(0, 2)
            .map((champion) => (champion as DeckCard)?.card?.name ?? '').join(' / ');
    } else {
        name = 'No Champions';
    }
    return name;
}
