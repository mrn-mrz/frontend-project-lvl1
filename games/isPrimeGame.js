import getRandomInt from '../src/getRandomInt.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const isPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = getRandomInt();
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number);

  return { description, question, correctAnswer };
};

export default isPrimeGame;
