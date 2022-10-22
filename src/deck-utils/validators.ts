import {getDeckFromCode} from 'lor-deckcodes-ts';
import {sum} from "lodash";

export function isValidDeckCode(
    deckCode: string,
    exactCardLimit: boolean = true,
    cardLimit: number = 40,
    applyRules: boolean = true // deckbuilding rules
): boolean {
    try {
        const deck = getDeckFromCode(deckCode);
        const cardNumber = sum(deck.map(c => +c.count))
        return !!deck
            && exactCardLimit ? cardNumber === cardLimit : cardNumber >= cardLimit
            // && applyRules ? true : true // TODO IMPLEMENTAR REGRAS DE CRIAÇÃO DE DECKS!!
    } catch (e) {
        return false;
    }
}
