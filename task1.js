const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number: ', (userInput) => {
  const x = Number(userInput);
  if (isNaN(x)) {
    console.error('Invalid number');
  } else if (x > 7) {
    console.log('Привет');
  }
  
  rl.close();
});