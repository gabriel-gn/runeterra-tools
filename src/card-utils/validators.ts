import {isNaN} from "lodash";
import {isRiotLorRegionAbbreviation} from "../riot-assets/models-globals";

export function isValidCardCode(cardCode: string): boolean {
    return !(cardCode.length < 7)
        && !isNaN(+cardCode.substring(0, 2))
        && isRiotLorRegionAbbreviation(cardCode.substring(2, 4))
        && !isNaN(+cardCode.substring(4, 7))
        && (cardCode.length > 7 ? cardCode[7] === 'T' : true)
        && (cardCode.length > 7 ? !isNaN(+cardCode.substring(8, cardCode.length)) : true)
}
