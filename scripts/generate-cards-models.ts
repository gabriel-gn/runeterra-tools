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
    RiotLoRCard, RiotLoRKeywordRef, RiotLoRRegionRef, RiotLorSpellSpeedRef
} from "../src";
import axios, {AxiosResponse} from 'axios';
import {from, map, Observable, tap} from "rxjs";
import {RiotLoRGlobals} from "./generate-riot-globals";

const normalizeString = (str: string) => {
    return `${str.replace(/[^a-z0-9]/gi, '_').toUpperCase()}`
        .replace('_____', '_')
        .replace('____', '_')
        .replace('___', '_')
        .replace('__', '_')
};

const allLorCards$ = from(axios.get(`https://api.lordecks.com/riot-assets/cards`))
    .pipe(
        map(r => r.data),
        // esse segundo map faz com que todas as cartas possuam as cartas associadas
        map((allCards: RiotLoRCard[]) => {
            allCards.forEach((card: RiotLoRCard) => {
                card.associatedCards = allCards.filter(c => card.associatedCardRefs.includes(c.cardCode)) ?? [];
            });
            return allCards;
        })
    );

function generateChampionsCode(cards: RiotLoRCard[]) {
        let champs = cards.filter(c => c.cardCode.length === 7 && c.rarityRef === 'Champion')
        const enumName = `CHAMPION_CARD_CODE`;
        const typeName = `ChampionCardCode`;
        champs = champs.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
        return `
        export enum ${enumName} {
        ${champs.map(vocabTerm => {
            const name = `${normalizeString(vocabTerm.name)}`
            return `${name} = '${vocabTerm.cardCode}'`;
        }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${champs.map((champ, index) => {
            const name = `${normalizeString(champ.name)}`
            let result = `${enumName}.${name}`;
            if (index !== 0) {
                result = `| ${result}` ;
            }
            return result;
        }).filter(i => i !== null).join('').replace(',', '')}
        
        export function is${typeName}(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `
}

function generateCardTypeCode(): string {
    return `
        export enum CARD_TYPE {
            CHAMPION = 'Champion',
            FOLLOWER = 'Follower',
            SPELL = 'Spell',
            LANDMARK = 'Landmark',
            EQUIPMENT = 'Equipment',
        }
        
        export type CardType = \`${CARD_TYPE.CHAMPION}\`
            | \`\${CARD_TYPE.FOLLOWER}\`
            | \`\${CARD_TYPE.SPELL}\`
            | \`\${CARD_TYPE.LANDMARK}\`
            | \`\${CARD_TYPE.EQUIPMENT}\`
        
        export function isCardType(variable: any): boolean {
            return Object.values(CARD_TYPE).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `;
}

function writeContentToFile(content: string = '') {
    const filepath = join(__dirname, '../src/card-utils/models.ts');
    writeFileSync(filepath, content, {flag: 'w'});
    exec(`npx prettier --write ${filepath}`)
}

allLorCards$.pipe(
    tap((cards: RiotLoRCard[]) => {
        let fullcontent = `
            // this is an auto-generated file from ${basename(__filename)}
        
            ${generateChampionsCode(cards)}

            ${generateCardTypeCode()}
        `
        writeContentToFile(fullcontent);
    })
).subscribe()
