import {CardRegionAbbreviation, isRiotLoRCard, RegionAbbreviation, RiotLoRCard} from "../riot-assets/models-cards";
import {RiotLoRRegionRef} from "../riot-assets/models-globals";

export function getCardRegionAbbreviation(card: RiotLoRCard | string): CardRegionAbbreviation {
    let code = `${card}`;
    if (isRiotLoRCard(card)) {
        code = (card as RiotLoRCard).cardCode;
    }
    return code.substring(2, 4).toUpperCase() as CardRegionAbbreviation;
}

export function getCardRegionRef(card: RiotLoRCard | string): RiotLoRRegionRef {
    let code = `${card}`;
    if (isRiotLoRCard(card)) {
        code = (card as RiotLoRCard).cardCode;
    }
    const entry = Object.entries(RegionAbbreviation).find(e => e[1] === getCardRegionAbbreviation(code));
    // @ts-ignore
    return entry[0];
}