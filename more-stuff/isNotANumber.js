function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(2));
console.log(isNotANumber(-2));
console.log(isNotANumber(0));
console.log(isNotANumber(undefined));
console.log(isNotANumber(null));
console.log(isNotANumber('cat'));