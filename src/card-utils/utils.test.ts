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
import {RiotLorRegionRef} from "../riot-assets/models-globals";

describe("test card-utils utils.ts", () => {
    it("should getCardRegionAbbreviation from CardCode", () => {
        expect(getCardRegionAbbreviation('01IO012')).toBe('IO');
    });

    it("should getCardRegionAbbreviation from RiotLoRCard", () => {
        expect(getCardRegionAbbreviation(twinDisciplinesMock)).toBe('IO');
    });

    it("should getCardRegionRef from CardCode", () => {
        expect(getCardRegionRef('01IO012')).toBe('Ionia');
    });

    it("should getCardRegionRef from RiotLoRCard", () => {
        expect(getCardRegionRef(twinDisciplinesMock)).toBe('Ionia');
    });

    it("should convert valid regionRef", () => {
        expect(regionRefToRegionAbbreviation('Ionia')).toBe('IO');
    });

    it("should convert valid uppercased regionRef", () => {
        expect(regionRefToRegionAbbreviation('IONIA')).toBe('IO');
    });

    it("should getCardMainRegion", () => {
        expect(getCardMainRegion(ionianHookmasterMock)).toBe('NX');
    });

    it("should getCardMainRegion from a list of region refs", () => {
        expect(getCardMainRegion(ionianHookmasterMock, ["Demacia", "Ionia"] as RiotLorRegionRef[])).toBe('IO');
    });

    //'Champion' | 'Follower' | 'Spell' | 'Landmark' | 'Equipment'
    it("should getCardType - 'Champion'", () => {
        expect(getCardType(teemoMock)).toBe('Champion');
    });

    it("should getCardType - 'Follower'", () => {
        expect(getCardType(ionianHookmasterMock)).toBe('Follower');
    });

    it("should getCardType - 'Spell'", () => {
        expect(getCardType(bladesEdgeMock)).toBe('Spell');
    });

    it("should getCardType - 'Landmark'", () => {
        expect(getCardType(emperorsDaisMock)).toBe('Landmark');
    });

    it("should getCardType - 'Equipment'", () => {
        expect(getCardType(demacianSteelMock)).toBe('Equipment');
    });
});
