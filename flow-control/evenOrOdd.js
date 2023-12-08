function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('This is not an integer!');
    return;
  }
  
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

console.log(evenOrOdd(3));
console.log(evenOrOdd(8));
console.log(evenOrOdd(0));
console.log(evenOrOdd('a'));