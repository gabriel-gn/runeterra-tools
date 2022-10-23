import {getCardMainRegion, getCardRegionAbbreviation, getCardRegionRef, regionRefToRegionAbbreviation} from "./utils";
import {ionianHookmaster, twinDisciplines} from "../mocks/card-reference.mock";

describe("test card-utils utils.ts", () => {
    it("should getCardRegionAbbreviation from CardCode", () => {
        expect(getCardRegionAbbreviation('01IO012')).toBe('IO');
    });

    it("should getCardRegionAbbreviation from RiotLoRCard", () => {
        expect(getCardRegionAbbreviation(twinDisciplines)).toBe('IO');
    });

    it("should getCardRegionRef from CardCode", () => {
        expect(getCardRegionRef('01IO012')).toBe('Ionia');
    });

    it("should getCardRegionRef from RiotLoRCard", () => {
        expect(getCardRegionRef(twinDisciplines)).toBe('Ionia');
    });

    it("should convert valid regionRef", () => {
        expect(regionRefToRegionAbbreviation('Ionia')).toBe('IO');
    });

    it("should convert valid uppercased regionRef", () => {
        expect(regionRefToRegionAbbreviation('IONIA')).toBe('IO');
    });

    it("should getCardMainRegion", () => {
        expect(getCardMainRegion(ionianHookmaster)).toBe('NX');
    });

    it("should getCardMainRegion from a list of region refs", () => {
        expect(getCardMainRegion(ionianHookmaster, ["Demacia", "Ionia"])).toBe('IO');
    });
});