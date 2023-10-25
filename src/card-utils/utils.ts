import {
    isRiotLoRCard,
    RiotLoRCard,
} from "../riot-assets/models-cards";
import {
    RIOT_LOR_KEYWORD_REF,
    RIOT_LOR_REGION_REF,
    RIOT_LOR_REGION_ABBREVIATION,
    RiotLorRarityRef,
    RiotLorRegionRef, RiotLorRegionAbbreviation, isRiotLorOriginRegionAbbreviation, RIOT_LOR_RARITY_REF
} from "../riot-assets/models-globals";
import {get, intersection} from "lodash";
import {CARD_TYPE, CardType} from "./models";

/**
 * get "NX" from a card with cardCode "01NX005"
 * @param card
 */
export function getCardRegionAbbreviation(card: RiotLoRCard | string): RiotLorRegionAbbreviation {
    let code = `${card}`;
    if (isRiotLoRCard(card)) {
        code = (card as RiotLoRCard).cardCode;
    }
    return code.substring(2, 4).toUpperCase() as RiotLorRegionAbbreviation;
}

/**
 * get "Noxus" from a card with cardCode "01NX005"
 * @param card
 */
export function getCardRegionRef(card: RiotLoRCard | string): RiotLorRegionRef {
    let code = `${card}`;
    if (card.hasOwnProperty('cardCode')) {
        code = (card as RiotLoRCard).cardCode;
    }
    const entry = Object.entries(RIOT_LOR_REGION_ABBREVIATION).find(e => e[1] === getCardRegionAbbreviation(code));
    // @ts-ignore
    return RIOT_LOR_REGION_REF[entry[0]];
}

/**
 * try to transform "PiltoverZaun" into "PZ"
 * If not correctly cased, try to uppercase the enum properties to find
 * @param regionRef eg: 'PiltoverZaun' | 'Noxus' | 'Ionia' etc...
 */
export function regionRefToRegionAbbreviation(regionRef: string): RiotLorRegionAbbreviation {
    let response = get(RIOT_LOR_REGION_ABBREVIATION, regionRef);
    if (!response) {
        // caso dê errado, converte tudo em upper snake case e tenta achar a região
        // @ts-ignore
        regionRef = `${regionRef}`
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toUpperCase())
            .join('_');
        response = RIOT_LOR_REGION_ABBREVIATION[regionRef as keyof typeof RIOT_LOR_REGION_ABBREVIATION] as RiotLorRegionAbbreviation;
    }
    return response
}

/**
 * try to transform "PZ" into "PiltoverZaun"
 * If not correctly cased, try to uppercase
 * @param regionAbbreviation eg: 'PZ' | 'NX' | 'IO' etc...
 */
export function regionAbbreviationToRegionRef(regionAbbreviation: RiotLorRegionAbbreviation): RiotLorRegionRef {
    try {
        // @ts-ignore
        return RIOT_LOR_REGION_REF[Object.entries(RIOT_LOR_REGION_ABBREVIATION).find(e => e[1] === regionAbbreviation)[0]] as RiotLorRegionRef;
    } catch (e) {
        if (isRiotLorOriginRegionAbbreviation(regionAbbreviation)) {
            return RIOT_LOR_REGION_REF.RUNETERRA;
        } else {
            throw "could not get region abbreviation"
        }
    }
}

/**
 * get a card main region from a deck, if card added from origin rules or multi-region rules
 * @param card
 * @param regionRefs
 */
export function getCardMainRegion(card: RiotLoRCard, regionRefs: RiotLorRegionRef[] = []): RiotLorRegionAbbreviation {
    let result;
    if (regionRefs.length === 0) {
        result = getCardRegionRef(card)
    } else {
        const regionRefsForCard = intersection(
            regionRefs,
            card.regionRefs
        ) as RiotLorRegionRef[];
        result = regionRefsForCard[0] || getCardRegionRef(card);
    }
    return regionRefToRegionAbbreviation(result);
}

/**
 * get cardType from input to categorize it.
 * @param card
 */
export function getCardType(card: RiotLoRCard): CardType {
    if (['ability', 'trap'].includes(card.type.toLowerCase())) {
        return CARD_TYPE.ABILITY
    } else if (!!card.spellSpeedRef || card.type === 'Spell') {
        return CARD_TYPE.SPELL;
    } else if (
        (card.keywordRefs &&
        card.keywordRefs.length > 0 &&
        card.keywordRefs.includes(RIOT_LOR_KEYWORD_REF.LANDMARK))
        || card.type === 'Landmark'
    ) {
        return CARD_TYPE.LANDMARK;
    } else if (
        (card.keywordRefs &&
        card.keywordRefs.length > 0 &&
        card.keywordRefs.includes(RIOT_LOR_KEYWORD_REF.EQUIPMENT))
        || card.type === 'Equipment'
    ) {
        return CARD_TYPE.EQUIPMENT;
    } else if ((card.rarityRef === RIOT_LOR_RARITY_REF.CHAMPION) || (!!card.supertype)) {
        return CARD_TYPE.CHAMPION;
    } else {
        return CARD_TYPE.FOLLOWER;
    }
}

/**
 * get rarityRef input and return the card cost in green essences
 * @param rarityRef
 */
export function rarityRefToCardCost(rarityRef: RiotLorRarityRef | string): number {
    switch (rarityRef.toUpperCase()) {
        case 'CHAMPION':
            return 3000;
            break;
        case 'EPIC':
            return 1200;
            break;
        case 'RARE':
            return 300;
            break;
        case 'COMMON':
            return 100;
            break;
        default:
            return 0;
            break;
    }
}
