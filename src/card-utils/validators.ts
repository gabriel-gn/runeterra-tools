import {isCardRegionAbbreviation} from "../riot-assets/models-cards";
import {isNaN} from "lodash";

export function isValidCardCode(cardCode: string): boolean {
    return !(cardCode.length < 7)
        && !isNaN(+cardCode.substring(0, 2))
        && isCardRegionAbbreviation(cardCode.substring(2, 4))
        && !isNaN(+cardCode.substring(4, 7))
        && (cardCode.length > 7 ? cardCode[7] === 'T' : true)
        && (cardCode.length > 7 ? !isNaN(+cardCode.substring(8, cardCode.length)) : true)
}