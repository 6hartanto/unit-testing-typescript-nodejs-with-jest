import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    const sut = toUpperCase;
    const expected = "HELLO WORLD";

    const actual = toUpperCase("hello world");

    expect(actual).toBe("HELLO WORLD");
  });
});
