import {getCardRegionAbbreviation, getCardRegionRef} from "./utils";
import {RiotLoRCard} from "../riot-assets/models-cards";
import {twinDisciplines} from "../mocks/card-reference.mock";

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
});