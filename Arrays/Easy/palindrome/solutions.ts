const numsToArray = (x: number): number[] =>
  x < 10 ? [x] : [...numsToArray(Math.floor(x / 10)), x % 10];

function isPalindromeArraySolution(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  const digits = numsToArray(x);
  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(x: number): boolean {
  console.log(`${x} % 10`, x % 10);
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversedHalf = 0;
  while (x > reversedHalf) {
    console.log(`x: ${x}, reversedHalf: ${reversedHalf}`);
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

const input = 121;
const input2 = -121;
const input3 = 10;
const input4 = 0;
console.log(isPalindrome(input));
