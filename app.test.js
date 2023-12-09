import {
  sum,
  capitalize,
  reverseString,
  calculator,
  analizeArray,
  caesarCipher,
} from "./app.js";

test("add", () => {
  expect(sum(2, 3)).toBe(5);
});

test("capitalize word first letter", () => {
  expect(capitalize("araba")).toBe("Araba");
});

test("reverse string", () => {
  expect(reverseString("dicle")).toBe("elcid");
});
test("reverse string", () => {
  expect(reverseString("bedirxan")).toBe("naxrideb");
});

test("calculator add", () => {
  expect(calculator.add(2, 3, 4)).toBe(9);
});

test("calculator subtract", () => {
  expect(calculator.subtract(6, 2, 1)).toBe(3);
});

test("calculator divide", () => {
  expect(calculator.divide(10, 3, 3.33)).toEqual(1);
});

test("calculator multiply", () => {
  expect(calculator.multiply(10, 3, 2)).toEqual(60);
});

test("analize array", () => {
  expect(analizeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("shifts letters in the alphabet correctly with positive key", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("shifts letters in the alphabet correctly with negative key", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
});

test("wraps around the alphabet with positive key", () => {
  expect(caesarCipher("xyz", 2)).toBe("zab");
});

test("wraps around the alphabet with negative key", () => {
  expect(caesarCipher("abc", -2)).toBe("yza");
});

test("leaves non-alphabetic characters unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("works with uppercase letters", () => {
  expect(caesarCipher("XYZ", 1)).toBe("YZA");
});

test("works with a large positive key", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("works with a large negative key", () => {
  expect(caesarCipher("abc", -27)).toBe("zab");
});
