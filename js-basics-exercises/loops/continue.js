let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  
  console.log(cities[i].length);
}

// The continue statement terminates the current iteration and continues with execution of the next iteration, allowing us to skip over elements in an array.