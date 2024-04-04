const { describe, test } = require("@jest/globals");

// add a describe in jest
describe("Matchers", () => {
  test("should add two plus two to be four", () => {
    expect(2 + 2).toBe(4);
  });

  test("should check object assignment values", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("adding positve numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test("should test null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("should test zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test("should test numbers", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("should test float point", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });

  test("should test string using regular expression", () => {
    expect("team").not.toMatch(/I/);
    expect("Chistoph").toMatch(/stop/);
  });

  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];
  test("should test arrays and iterables", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });

  function exceptionCode() {
    throw new Error('Exception occurred!');
  }
  test('should test exceptions', () => {
    expect(() => exceptionCode()).toThrow();
    expect(() => exceptionCode()).toThrow(Error);
    expect(() => exceptionCode()).toThrow('Exception occurred');
    expect(() => exceptionCode()).toThrow(/Exception/);
    expect(() => exceptionCode()).toThrow(/^Exception occurred!$/);
  });

});
