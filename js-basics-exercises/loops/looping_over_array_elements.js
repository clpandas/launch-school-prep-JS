let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

/*
Line 5 lets us access the array element at the current index, 
and log the returned element to the console with console.log. 
Then, we increment index by 1.

After each iteration of the loop, the while condition is evaluated. 
Because JavaScript arrays have a zero-based index, 
we want to terminate the loop when index is equal to array.length,
because the last index of an array is always one less than the array's length. 

*/