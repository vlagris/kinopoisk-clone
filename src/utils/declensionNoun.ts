
export function declensionNoun(num: number, words: [string, string, string] ) {
  let lastNum = Math.abs(num);
  lastNum %= 100;
  if (lastNum >= 5 && lastNum <= 20) {
    return words[2];
  }
  lastNum %= 10;
  if (lastNum === 1) {
    return words[0];
  }
  if (lastNum >= 2 &&lastNum <= 4) {
    return words[1];
  }
  return words[2];
}