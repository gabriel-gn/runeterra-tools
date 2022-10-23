import {getCardMainRegion, regionRefToRegionAbbreviation} from "./utils";
import {ionianHookmaster} from "../mocks/card-reference.mock";

describe("test deck-utils utils.ts", () => {
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
        expect(getCardMainRegion(ionianHookmaster, ["Demacia","Ionia"])).toBe('IO');
    });
});