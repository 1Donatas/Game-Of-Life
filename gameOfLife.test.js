const { verifyCell } = require('./gameOfLife');

describe("verifyCell function", () => {
  test("should return 'dead' when neighbours are less than 2", () => {
    expect(verifyCell(0)).toBe(false);
    expect(verifyCell(1)).toBe(false);
  });

  test("should return 'dead' when neighbours are greater than 3", () => {
    expect(verifyCell(4)).toBe(false);
    expect(verifyCell(5)).toBe(false);
  });

  test("should return 'live' when neighbours are 2 or 3", () => {
    expect(verifyCell(2)).toBe(true);
    expect(verifyCell(3)).toBe(true);
  });
});