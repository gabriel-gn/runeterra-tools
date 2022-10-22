import {isValidCardCode} from "./validators";

describe("test card-utils validators", () => {
    it("should be VALID card code", () => {
        expect(isValidCardCode('01IO012')).toBe(true);
    });

    it("should be VALID card code if extra characters in cardCode is Token", () => {
        expect(isValidCardCode('01IO012T1')).toBe(true);
    });

    it("should be INVALID card code if code length < 7", () => {
        expect(isValidCardCode('01XX01')).toBe(false);
    });

    it("should be INVALID card code if set identifier not valid", () => {
        expect(isValidCardCode('0AIO012')).toBe(false);
    });

    it("should be INVALID card code if region identifier is invalid", () => {
        expect(isValidCardCode('01XX012')).toBe(false);
    });

    it("should be INVALID card code if card number is invalid", () => {
        expect(isValidCardCode('01IO01A')).toBe(false);
    });

    it("should be INVALID card code if extra characters in cardCode is not Token", () => {
        expect(isValidCardCode('01IO012B1')).toBe(false);
    });

    it("should be INVALID card code if after extra characters in cardCode is not number", () => {
        expect(isValidCardCode('01IO012BL')).toBe(false);
    });

    it("should be INVALID card code if after extra characters in cardCode has nothing", () => {
        expect(isValidCardCode('01IO012B')).toBe(false);
    });
});