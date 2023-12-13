function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(2));
console.log(isNegativeZero(undefined));
console.log(isNegativeZero(null));
console.log(isNegativeZero('cat'));