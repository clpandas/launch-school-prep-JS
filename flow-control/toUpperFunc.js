function turnAllCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(turnAllCaps("Meow."));
console.log(turnAllCaps("Crystal Lor"))
console.log(turnAllCaps("How are you today?"))