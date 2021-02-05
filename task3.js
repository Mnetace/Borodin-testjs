const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter numbers separated by space: ', (userInput) => {
  const numbers = userInput.split(' ');
  
  for (let i = 0; i < numbers.length; i++) {
    const x = Number(numbers[i]);
    if (!isNaN(x) && (x % 3 === 0)) {
        console.log(x);
    }
  }
 
  rl.close();
});