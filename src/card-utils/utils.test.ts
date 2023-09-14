import {
    getCardMainRegion,
    getCardRegionAbbreviation,
    getCardRegionRef,
    getCardType,
    regionRefToRegionAbbreviation
} from "./utils";
import {
    bladesEdgeMock,
    demacianSteelMock,
    emperorsDaisMock,
    ionianHookmasterMock,
    teemoMock,
    twinDisciplinesMock
} from "../mocks/card-reference.mock";
import {RIOT_LOR_REGION_REF} from "../riot-assets/models-globals";
import {CARD_REGION_ABBREVIATION} from "../riot-assets/models-cards";
import {CARD_TYPE} from "./models";

describe("test card-utils utils.ts", () => {
    it("should getCardRegionAbbreviation from CardCode", () => {
        expect(getCardRegionAbbreviation('01IO012')).toBe(CARD_REGION_ABBREVIATION.IONIA);
    });

    it("should getCardRegionAbbreviation from RiotLoRCard", () => {
        expect(getCardRegionAbbreviation(twinDisciplinesMock)).toBe(CARD_REGION_ABBREVIATION.IONIA);
    });

    it("should getCardRegionRef from CardCode", () => {
        expect(getCardRegionRef('01IO012')).toBe(RIOT_LOR_REGION_REF.IONIA);
    });

    it("should getCardRegionRef from RiotLoRCard", () => {
        expect(getCardRegionRef(twinDisciplinesMock)).toBe(RIOT_LOR_REGION_REF.IONIA);
    });

    it("should convert valid regionRef", () => {
        expect(regionRefToRegionAbbreviation(RIOT_LOR_REGION_REF.IONIA)).toBe(CARD_REGION_ABBREVIATION.IONIA);
    });

    it("should convert valid uppercased regionRef", () => {
        expect(regionRefToRegionAbbreviation(RIOT_LOR_REGION_REF.IONIA)).toBe(CARD_REGION_ABBREVIATION.IONIA);
    });

    it("should getCardMainRegion", () => {
        expect(getCardMainRegion(ionianHookmasterMock)).toBe(CARD_REGION_ABBREVIATION.NOXUS);
    });

    it("should getCardMainRegion from a list of region refs", () => {
        expect(getCardMainRegion(ionianHookmasterMock, [RIOT_LOR_REGION_REF.DEMACIA, RIOT_LOR_REGION_REF.IONIA])).toBe(CARD_REGION_ABBREVIATION.IONIA);
    });

    //'Champion' | 'Follower' | 'Spell' | 'Landmark' | 'Equipment'
    it("should getCardType - 'Champion'", () => {
        expect(getCardType(teemoMock)).toBe(CARD_TYPE.CHAMPION);
    });

    it("should getCardType - 'Follower'", () => {
        expect(getCardType(ionianHookmasterMock)).toBe(CARD_TYPE.FOLLOWER);
    });

    it("should getCardType - 'Spell'", () => {
        expect(getCardType(bladesEdgeMock)).toBe(CARD_TYPE.SPELL);
    });

    it("should getCardType - 'Landmark'", () => {
        expect(getCardType(emperorsDaisMock)).toBe(CARD_TYPE.LANDMARK);
    });

    it("should getCardType - 'Equipment'", () => {
        expect(getCardType(demacianSteelMock)).toBe(CARD_TYPE.EQUIPMENT);
    });
});
