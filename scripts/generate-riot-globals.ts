import {writeFileSync} from 'fs';
import {join, basename} from 'path';
import {exec} from "shelljs";
import {
    RIOT_LOR_SPELL_SPEED_REF,
} from "../src";
import axios, {AxiosResponse} from 'axios';
import {from, map, Observable, tap} from "rxjs";

export interface RiotLoRGlobals {
    vocabTerms: {
        description: string
        name: string
        nameRef: string
    }[]
    keywords: {
        description: string
        name: string
        nameRef: string
    }[]
    regions: {
        abbreviation: string
        iconAbsolutePath: string
        name: string
        nameRef: string
    }[]
    spellSpeeds: {
        name: string
        nameRef: string
    }[]
    rarities: {
        name: string
        nameRef: string
    }[]
    sets: {
        iconAbsolutePath: string
        name: string
        nameRef: string
    }[]
    formats: {
        iconAbsolutePath?: string
        name: string
        nameRef: string
    }[]
}

const allLorCards$ = from(axios.get(`https://api.lordecks.com/riot-assets/cards`)).pipe(map(r => r.data));
const riotGlobals$ = from(axios.get(`https://api.lordecks.com/riot-assets/globals`)).pipe(map(r => r.data));
const normalizeString = (str: string) => {
    return `${str.replace(/[^a-z0-9]/gi, '_').toUpperCase()}`
        .replace('_____', '_')
        .replace('____', '_')
        .replace('___', '_')
        .replace('__', '_')
}

function generateRiotLoRFormatsCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_FORMAT`;
    const formats = riotGlobals.formats.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });

    return `
        export enum ${enumName} {
            ${formats.map(format => {
                return `${normalizeString(format.name)} = '${format.nameRef}'`; 
            })}
        }
        
        // [...new Set(cards.map(c => c.formatRefs).flat())]
        export type RiotLorFormat =
            ${formats.map((format, index) => {
                if (index === 0) {
                    return `${enumName}.${normalizeString(format.name)}`;
                } else {
                    return `| ${enumName}.${normalizeString(format.name)}`;
                }
            }).join('').replace(',', '')}
        
        export function isRiotLorFormat(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
        
        export function isRiotLorStandardFormat(variable: any): boolean {
            if (Array.isArray(variable)) {
                return variable.some(f => \`\${f}\` === ${enumName}.STANDARD);
            } else {
                return \`\${variable}\` === ${enumName}.STANDARD;
            }
        }
        
        export function getRiotLorDeckFormats(deck: LoRDeck): RiotLorFormat[] {
            const deckCards: RiotLoRCard[] = Object.keys(deck.cards)
                // @ts-ignore
                .map(k => deck.cards[k].map((c: DeckCard) => c.card))
                .flat()
            const formatRefs: RiotLorFormat[] = intersection(...deckCards.map(c => c.formatRefs));
            return formatRefs;
        }
    `
}

function generateRiotLoRKeywordRefCode(riotGlobals: RiotLoRGlobals) {
    const ignoreNameRefList = [
        'SpellOverwhelm'
    ];
    const ignoreNameList = [
        'MISSING_TRANSLATION'
    ];
    const enumName = 'RIOT_LOR_KEYWORD_REF'
    const typeName = 'RiotLorKeywordRef'
    const keywords = riotGlobals.keywords.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });

    return `
        export enum ${enumName} {
            ${keywords.map(keyword => {
                const kwName = `${normalizeString(keyword.name)}`
                if (ignoreNameList.includes(kwName) || ignoreNameRefList.includes(keyword.nameRef)) {
                    return null;
                } else {
                    return `${kwName} = '${keyword.nameRef}'`;}
                }
            ).filter(kw => kw !== null)}
        }
        
        export type ${typeName} =
            ${keywords.map((keyword, index) => {
                const kwName = `${normalizeString(keyword.name)}`
                let result: any = ''
                if (index === 0) {
                    result = `${enumName}.${normalizeString(keyword.name)}`;
                } else {
                    result = `| ${enumName}.${normalizeString(keyword.name)}`;
                }
                if (ignoreNameList.includes(kwName) || ignoreNameRefList.includes(keyword.nameRef)) {
                    result = null;
                }
                return result;
            }).join('').replace(',', '')}
        
        export function is${typeName}(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `
}

function generateRiotLoRRaritiesCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_RARITY_REF`;
    const typeName = `RiotLorRarityRef`;
    const rarities = riotGlobals.rarities.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${rarities.map(rarity => {
            const name = `${normalizeString(rarity.name)}`
            return `${name} = '${rarity.nameRef}'`;
        }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${rarities.map((rarity, index) => {
            const name = `${normalizeString(rarity.name)}`
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

function generateRiotLoRRegionRefCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_REGION_REF`;
    const typeName = `RiotLorRegionRef`;
    const regions = riotGlobals.regions.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${regions.map(region => {
            const name = `${normalizeString(region.name)}`
            let result: any = `${name} = '${region.nameRef}'`;
            if (region.abbreviation.length !== 2) { // BASE REGIONS HAVE ONLY 2 IN ABBRV
                result = null;
            }
            return result;
        }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${regions.map((region, index) => {
            const name = `${normalizeString(region.name)}`
            let result: any = `${enumName}.${name}`;
            if (index !== 0) {
                result = `| ${result}` ;
            }
            if (region.abbreviation.length !== 2) { // BASE REGIONS HAVE ONLY 2 IN ABBRV
                result = null;
            }
            return result;
        }).filter(i => i !== null).join('').replace(',', '')}
        
        export function is${typeName}(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `
}

function generateRiotLoRRegionAbbreviationCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_REGION_ABBREVIATION`;
    const typeName = `RiotLorRegionAbbreviation`;
    const regions = riotGlobals.regions.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${regions.map(region => {
        const name = `${normalizeString(region.name)}`
        let result: any = `${name} = '${region.abbreviation}'`;
        if (region.abbreviation.length !== 2) { // BASE REGIONS HAVE ONLY 2 IN ABBRV
            result = null;
        }
        return result;
    }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${regions.map((region, index) => {
        const name = `${normalizeString(region.name)}`
        let result: any = `${enumName}.${name}`;
        if (index !== 0) {
            result = `| ${result}` ;
        }
        if (region.abbreviation.length !== 2) { // BASE REGIONS HAVE ONLY 2 IN ABBRV
            result = null;
        }
        return result;
    }).filter(i => i !== null).join('').replace(',', '')}
        
        export function is${typeName}(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `
}

function generateRiotLoROriginRegionRefCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_ORIGIN_REGION_REF`;
    const typeName = `RiotLorOriginRegionRef`;
    const regions = riotGlobals.regions.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${regions.map(region => {
        const name = `${normalizeString(region.name)}`
        let result: any = `${name} = '${region.nameRef}'`;
        if (region.abbreviation.length === 2) { // ORIGIN REGIONS HAVE MORE THAN 2 IN ABBRV
            result = null;
        }
        return result;
    }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${regions.map((region, index) => {
        const name = `${normalizeString(region.name)}`
        let result: any = `${enumName}.${name}`;
        if (index !== 0) {
            result = `| ${result}` ;
        }
        if (region.abbreviation.length === 2) { // ORIGIN REGIONS HAVE MORE THAN 2 IN ABBRV
            result = null;
        }
        return result;
    }).filter(i => i !== null).join('').replace(',', '')}
        
        export function is${typeName}(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `
}

function generateRiotLoROriginRegionAbbreviationCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_ORIGIN_REGION_ABBREVIATION`;
    const typeName = `RiotLorOriginRegionAbbreviation`;
    const regions = riotGlobals.regions.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${regions.map(region => {
        const name = `${normalizeString(region.name)}`
        let result: any = `${name} = '${region.abbreviation}'`;
        if (region.abbreviation.length === 2) { // ORIGIN REGIONS HAVE MORE THAN 2 IN ABBRV
            result = null;
        }
        return result;
    }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${regions.map((region, index) => {
        const name = `${normalizeString(region.name)}`
        let result: any = `${enumName}.${name}`;
        if (index !== 0) {
            result = `| ${result}` ;
        }
        if (region.abbreviation.length === 2) { // ORIGIN REGIONS HAVE MORE THAN 2 IN ABBRV
            result = null;
        }
        return result;
    }).filter(i => i !== null).join('').replace(',', '')}
        
        export function is${typeName}(variable: any): boolean {
            return Object.values(${enumName}).map(i => \`\${i}\`).includes(\`\${variable}\`);
        }
    `
}

function generateRiotLoRSetsCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_SET`;
    const typeName = `RiotLorSet`;
    const sets = riotGlobals.sets.sort((a, b) => {
        if (a.nameRef < b.nameRef) { return -1; }
        if (a.nameRef > b.nameRef) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${sets.map(set => {
        const name = `${normalizeString(set.name)}`
        return `${name} = '${set.nameRef}'`;
    }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${sets.map((set, index) => {
        const name = `${normalizeString(set.name)}`
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

function generateRiotLorSpellSpeedRefCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_SPELL_SPEED_REF`;
    const typeName = `RiotLorSpellSpeedRef`;
    const spellSpeeds = riotGlobals.spellSpeeds.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${spellSpeeds.map(spell => {
        const name = `${normalizeString(spell.name)}`
        return `${name} = '${spell.nameRef}'`;
    }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${spellSpeeds.map((spell, index) => {
        const name = `${normalizeString(spell.name)}`
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

function generateRiotLorVocabTermsCode(riotGlobals: RiotLoRGlobals) {
    const enumName = `RIOT_LOR_VOCAB_TERM`;
    const typeName = `RiotLorVocabTerm`;
    const vocabTerms = riotGlobals.vocabTerms.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return `
        export enum ${enumName} {
        ${vocabTerms.map(vocabTerm => {
        const name = `${normalizeString(vocabTerm.name)}`
        return `${name} = '${vocabTerm.nameRef}'`;
    }).filter(i => i !== null)}
        }
        
        export type ${typeName} =
        ${vocabTerms.map((vocabTerm, index) => {
        const name = `${normalizeString(vocabTerm.name)}`
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

function generateRiotGlobalsInterfaceCode() {
    return `
    export interface RiotLoRGlobalVocabTerm {
        description: string;
        name: string;
        nameRef: RiotLorVocabTerm;
    }
    
    export interface RiotLoRGlobalKeyword {
        description: string;
        name: string;
        nameRef: RiotLorKeywordRef;
    }
    
    export interface RiotLoRGlobalRegion {
        abbreviation: string;
        iconAbsolutePath: string;
        name: string;
        nameRef: RiotLorRegionRef | RiotLorOriginRegionRef;
    }
    
    export interface RiotLoRGlobalSpellSpeed {
        name: string;
        nameRef: RiotLorSpellSpeedRef;
    }
    
    export interface RiotLoRGlobalRarity {
        name: string;
        nameRef: RiotLorRarityRef;
    }
    
    export interface RiotLoRGlobalSet {
        iconAbsolutePath: string;
        name: string;
        nameRef: RiotLorSet;
    }
    
    export interface RiotLoRGlobal {
        vocabTerms: RiotLoRGlobalVocabTerm[];
        keywords: RiotLoRGlobalKeyword[];
        regions: RiotLoRGlobalRegion[];
        spellSpeeds: RiotLoRGlobalSpellSpeed[];
        rarities: RiotLoRGlobalRarity[];
        sets: RiotLoRGlobalSet[];
    }
    `
}

function writeContentToFile(content: string = '') {
    const filepath = join(__dirname, '../src/riot-assets/models-globals.ts');
    writeFileSync(filepath, content, {flag: 'w'});
    exec(`npx prettier --write ${filepath}`)
}

riotGlobals$.pipe(
    tap((riotGlobals: RiotLoRGlobals) => {
        let fullcontent = `
            // this is an auto-generated file from ${basename(__filename)}
            
            import {DeckCard, LoRDeck} from "../deck-utils/models";
            import {intersection} from "lodash";
            import {RiotLoRCard} from "./models-cards";
        
            ${generateRiotGlobalsInterfaceCode()}

            ${generateRiotLoRFormatsCode(riotGlobals)}

            ${generateRiotLoRKeywordRefCode(riotGlobals)}

            ${generateRiotLoRRaritiesCode(riotGlobals)}
            
            ${generateRiotLoRRegionRefCode(riotGlobals)}

            ${generateRiotLoRRegionAbbreviationCode(riotGlobals)}
            
            ${generateRiotLoROriginRegionRefCode(riotGlobals)}
            
            ${generateRiotLoROriginRegionAbbreviationCode(riotGlobals)}

            ${generateRiotLoRSetsCode(riotGlobals)}

            ${generateRiotLorSpellSpeedRefCode(riotGlobals)}

            ${generateRiotLorVocabTermsCode(riotGlobals)}
        `
        writeContentToFile(fullcontent);
    })
).subscribe()
