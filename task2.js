const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a name: ', (userInput) => {
  if (userInput.toUpperCase() === 'Вячеслав'.toUpperCase()) {
    console.error('Привет, Вячеслав');
  } else {
    console.log('Нет такого имени');
  }

  rl.close();
});