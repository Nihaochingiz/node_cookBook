const uppercase = require("./uppercase");


test("uppercase hello returns HELLO", () => {
    expect(uppercase("hello")).toBe("HELLO");
});