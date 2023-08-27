const getMoveingEyes= require("./eyes");

test("Eyes moving with mouse", () => {

    expect(getMoveingEyes("eye")).toBe("/eyes");

});