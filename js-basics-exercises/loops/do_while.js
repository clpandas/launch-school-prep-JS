let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
// This will not output anything because the condition is not satisfied. 


do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
// This will output 'Woooot!' a single time because a do...while statement always executes at least once because the statement is checked after the block has been executed. 