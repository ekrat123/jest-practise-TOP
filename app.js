export {
  sum,
  capitalize,
  reverseString,
  calculator,
  analizeArray,
  caesarCipher,
};

function sum(a, b) {
  return a + b;
}

function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(...arr) {
    return arr.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  },
  subtract(...arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result -= arr[i];
    }
    return result;
  },

  divide(...arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result /= arr[i];
    }
    return Number(result.toFixed(2));
  },

  multiply(...arr) {
    return arr.reduce((prev, curr) => {
      return prev * curr;
    }, 1);
  },
};

const alphabetLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabetUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function caesarCipher(text, key = 1) {
  return text
    .split("")
    .map((letter) => {
      return alphabetLowerCase.includes(letter)
        ? alphabetLowerCase[(alphabetLowerCase.indexOf(letter) + key + 52) % 26]
        : alphabetUpperCase.includes(letter)
        ? alphabetUpperCase[(alphabetUpperCase.indexOf(letter) + key + 52) % 26]
        : letter;
    })
    .join("");
}

function analizeArray(arr) {
  arr = arr.sort((a, b) => a - b);
  const total = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return {
    average: total / arr.length,
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length,
  };
}
