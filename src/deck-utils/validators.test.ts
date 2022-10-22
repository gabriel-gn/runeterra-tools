import {isValidDeckCode} from "./validators";

describe("test card-utils validators", () => {
    it("should be VALID deck code", () => {
        expect(isValidDeckCode('EUEACBQCEIAQGCJDAEDAIBYBAYBSEAIGAERACBQMBEBAKCIDAUBAMCIEEABQCAYJGMAQMBRHAIDASBRIAEBAMBYFFA'))
            .toBe(true);
    });

    it("should be INVALID deck code", () => {
        // 3 Annies
        expect(isValidDeckCode('CEAQCBQDBQAAA')).toBe(false);
    });

    it("should be INVALID deck code, because has 53 cards", () => {
        // lots of champions
        expect(isValidDeckCode('CUGQCAIACYAQCAYUAEAQICABAIDC4AIFBI5ACBICAQAQKBAGAEDAUDYBAYBQYAIGAQKQCBQMBABQGCIJHDMQCAYEA4BSPAQBAEAQCBJVAA'))
            .toBe(false);
    });

    it("should be VALID deck code, has 53 cards but has no limit", () => {
        // lots of champions
        expect(isValidDeckCode(
            'CUGQCAIACYAQCAYUAEAQICABAIDC4AIFBI5ACBICAQAQKBAGAEDAUDYBAYBQYAIGAQKQCBQMBABQGCIJHDMQCAYEA4BSPAQBAEAQCBJVAA',
            false,
            )
        )
        .toBe(true);
    });

    it("should be INVALID deck code, has 53 cards but has lower cards than permitted", () => {
        // lots of champions
        expect(isValidDeckCode(
                'CUGQCAIACYAQCAYUAEAQICABAIDC4AIFBI5ACBICAQAQKBAGAEDAUDYBAYBQYAIGAQKQCBQMBABQGCIJHDMQCAYEA4BSPAQBAEAQCBJVAA',
                false,
                60
            )
        )
        .toBe(true);
    });
});