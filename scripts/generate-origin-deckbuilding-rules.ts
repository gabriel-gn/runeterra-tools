import {writeFileSync} from 'fs';
import {join, basename} from 'path';
import {exec} from "shelljs";
import {
    CARD_TYPE,
    DeckbuildingRule,
    DeckCard,
    getCardType,
    LoRDeck,
    ORIGIN_REGION_ABBREVIATION,
    RIOT_LOR_SPELL_SPEED_REF,
    RiotLoRCard
} from "../src";
import axios, {AxiosResponse} from 'axios';
import {from, map, Observable, tap} from "rxjs";

interface deckbuildingRuleParameter {
    name: string,
    abbreviation: ORIGIN_REGION_ABBREVIATION,
    championCode: string,
    condition: (card: RiotLoRCard) => boolean
}


const championOriginRules: deckbuildingRuleParameter[] = [
    {
        name: 'The Virtuoso',
        abbreviation: ORIGIN_REGION_ABBREVIATION.JHIN,
        championCode: '06RU002',
        condition: (card: RiotLoRCard) => {
            // Jhin can put in deck any follower with skill
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
        championCode: '06RU001',
        condition: (card: RiotLoRCard) => {
            // 06RU001T3 is "chime"'s code
            return card.cardCode === '06RU001' || (
                card.associatedCardRefs.includes('06RU001T3')
            );
        },
    },
    {
        name: 'Agony\'s Embrace',
        abbreviation: ORIGIN_REGION_ABBREVIATION.EVELYNN,
        championCode: '06RU025',
        condition: (card: RiotLoRCard) => {
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
                '07BW033',
            ];
            return card.cardCode === '06RU025' || (
                evelynnCards.includes(card.cardCode)
            );
        },
    },
    {
        name: 'The Shadow Reaper',
        abbreviation: ORIGIN_REGION_ABBREVIATION.KAYN,
        championCode: '06RU005',
        condition: (card: RiotLoRCard) => {
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
        championCode: '06RU008',
        condition: (card: RiotLoRCard) => {
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
        championCode: '06RU009',
        condition: (card: RiotLoRCard) => {
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
        championCode: '06RU006',
        condition: (card: RiotLoRCard) => {
            return card.cardCode === '06RU006' || (
                card.spellSpeedRef === RIOT_LOR_SPELL_SPEED_REF.BURST
                // TODO checar se a spell é target
            );
        },
    },
    {
        name: 'The World Ender',
        abbreviation: ORIGIN_REGION_ABBREVIATION.AATROX,
        championCode: '06RU026',
        condition: (card: RiotLoRCard) => {
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
    {
        name: 'Many-Shaped Jungle Friends',
        abbreviation: ORIGIN_REGION_ABBREVIATION.NEEKO,
        championCode: '07RU012',
        condition: (card: RiotLoRCard) => {
            const neekoSubtypes = [
                'BIRD',
                'CAT',
                'DOG',
                'ELNUK',
                'FAE',
                'REPTILE',
                'SPIDER',
                'AVE', // pt_br
                'FELINO', // pt_br
                'CANINO', // pt_br
                'FADA', // pt_br
                'RÉPTIL', // pt_br
                'ARANHA', // pt_br
            ];
            return card.cardCode === '07RU012' || (
                card.subtypes.some(s => neekoSubtypes.some(d => d.includes(s.toUpperCase())))
            );
        },
    },
    {
        name: "The Poro King's Decree",
        abbreviation: ORIGIN_REGION_ABBREVIATION.POROKING,
        championCode: '07RU015',
        condition: (card: RiotLoRCard) => {
            const kingPoroSubtypes = [
                'PORO',
            ];
            return card.cardCode === '07RU015'
                || (card.name.toUpperCase().includes('PORO'))
                || (card.subtypes.some(s => kingPoroSubtypes.some(d => d.includes(s.toUpperCase()))))
                ;
        },
    },
];

function generateDeckMeetsCondition(championCode: string): string {
    return `return lorDeck.cards.champions.some((c: DeckCard) => c.card.cardCode === '${championCode}');`
}

function generateCardMeetCondition(allLorCards: RiotLoRCard[], championCode: string, condition: (card: RiotLoRCard) => boolean = (card) => card.name === 'Jhin'): string {
    return `
        const champion${championCode}Cards = [
        ${[...new Set(
            allLorCards
            .filter(c => condition(c))
            .map(c => `"${c.cardCode}"`)
            .concat(`"${championCode}"`)
        )]}
        ];
        return champion${championCode}Cards.includes(card.cardCode);
    `
}

function generateDeckbuildingRuleText(allLorCards: RiotLoRCard[]): string {
    return championOriginRules.map((c: deckbuildingRuleParameter) => {
        return `{
            name: "${c.name}",
            abbreviation: "${c.abbreviation}",
            doesDeckMeetCondition: (lorDeck: LoRDeck) => { ${generateDeckMeetsCondition(c.championCode)} },
            doesCardMeetCondition: (card: RiotLoRCard) => { ${generateCardMeetCondition(allLorCards, c.championCode, c.condition)} },
        }`;
    }).toString();
}

function generateOriginDeckbuildingCode(allLorCards: RiotLoRCard[]) {
    const filepath = join(__dirname, '../test.ts');
    writeFileSync(filepath, `
    // this is an auto-generated file from ${basename(__filename)}
    import {
        CARD_TYPE,
        DeckbuildingRule,
        DeckCard,
        getCardType,
        LoRDeck,
        ORIGIN_REGION_ABBREVIATION, RIOT_LOR_SPELL_SPEED_REF,
        RiotLoRCard
    } from "../src";

    export const championOriginRules: DeckbuildingRule[] = [
        ${generateDeckbuildingRuleText(allLorCards)}
    ]
    `
        , {flag: 'w'});
    exec(`npx prettier --write ${filepath}`)
}

const allLorCards$ = from(axios.get(`https://api.lordecks.com/riot-assets/cards`))
    .pipe(map(r => r.data));

allLorCards$.pipe(
    tap(cards => {
        console.log(cards[0]);
        generateOriginDeckbuildingCode(cards);
    })
).subscribe()
