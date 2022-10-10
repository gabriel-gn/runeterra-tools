import {getDeckFromCode} from 'lor-deckcodes-ts';

export function isValidDeckCode(deckCode: string): boolean {
    try {
        getDeckFromCode(deckCode);
        return true;
    } catch (e) {
        return false;
    }
}
