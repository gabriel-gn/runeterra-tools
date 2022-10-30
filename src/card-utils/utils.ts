import {CardRegionAbbreviation, isRiotLoRCard, RegionAbbreviation, RiotLoRCard} from "../riot-assets/models-cards";
import {RiotLorRarityRef, RiotLoRRegionRef} from "../riot-assets/models-globals";
import {get, intersection} from "lodash";
import {CardType} from "./models";

/**
 * get "NX" from a card with cardCode "01NX005"
 * @param card
 */
export function getCardRegionAbbreviation(card: RiotLoRCard | string): CardRegionAbbreviation {
    let code = `${card}`;
    if (isRiotLoRCard(card)) {
        code = (card as RiotLoRCard).cardCode;
    }
    return code.substring(2, 4).toUpperCase() as CardRegionAbbreviation;
}

/**
 * get "Noxus" from a card with cardCode "01NX005"
 * @param card
 */
export function getCardRegionRef(card: RiotLoRCard | string): RiotLoRRegionRef {
    let code = `${card}`;
    if (isRiotLoRCard(card)) {
        code = (card as RiotLoRCard).cardCode;
    }
    const entry = Object.entries(RegionAbbreviation).find(e => e[1] === getCardRegionAbbreviation(code));
    // @ts-ignore
    return entry[0];
}

/**
 * try to transform "PiltoverZaun" into "PZ"
 * If not correctly cased, try to uppercase the enum properties to find
 * @param regionRef eg: 'PiltoverZaun' | 'Noxus' | 'Ionia' etc...
 */
export function regionRefToRegionAbbreviation(regionRef: string): CardRegionAbbreviation {
    let response = get(RegionAbbreviation, regionRef);
    if (!response) {
        // caso dê errado, converte tudo em uppercase e tenta achar a região
        regionRef = `${regionRef}`.toUpperCase();
        const newRegionAbbr: any = {} // "RegionAbbreviation" with all property names as uppercase
        Object.keys(RegionAbbreviation)
            .forEach(
                (k: string) => {
                    newRegionAbbr[`${k.toUpperCase()}`] = RegionAbbreviation[k as keyof typeof RegionAbbreviation]
                }
            );
        response = newRegionAbbr[regionRef as keyof typeof RegionAbbreviation] as CardRegionAbbreviation;
    }
    return response
}

/**
 * try to transform "PZ" into "PiltoverZaun"
 * If not correctly cased, try to uppercase
 * @param regionAbbreviation eg: 'PZ' | 'NX' | 'IO' etc...
 */
export function regionAbbreviationToRegionRef(regionAbbreviation: CardRegionAbbreviation): RiotLoRRegionRef {
    // @ts-ignore
    return Object.entries(RegionAbbreviation).find(e => e[1] === regionAbbreviation)[0] as RiotLoRRegionRef;
}

/**
 * get a card main region from a deck, if card added from origin rules or multi-region rules
 * @param card
 * @param regionRefs
 */
export function getCardMainRegion(card: RiotLoRCard, regionRefs: RiotLoRRegionRef[] = []): CardRegionAbbreviation {
    let result;
    if (regionRefs.length === 0) {
        result = getCardRegionRef(card)
    } else {
        const regionRefsForCard = intersection(
            regionRefs,
            card.regionRefs
        ) as RiotLoRRegionRef[];
        result = regionRefsForCard[0] || getCardRegionRef(card);
    }
    return regionRefToRegionAbbreviation(result);
}

/**
 * get cardType from input to categorize it.
 * @param card
 */
export function getCardType(card: RiotLoRCard): CardType {
    if (!!card.spellSpeedRef) {
        return 'Spell';
    } else if (
        card.keywordRefs &&
        card.keywordRefs.length > 0 &&
        card.keywordRefs.includes('LandmarkVisualOnly')
    ) {
        return 'Landmark';
    } else if (
        card.keywordRefs &&
        card.keywordRefs.length > 0 &&
        card.keywordRefs.includes('Equipment')
    ) {
        return 'Equipment';
    } else if (card.rarityRef === 'Champion') {
        return 'Champion';
    } else {
        return 'Follower';
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