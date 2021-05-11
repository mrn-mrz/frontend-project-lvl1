import getRandomInt from '../src/getRandomInt.js';

const gcd = (num1, num2) => {
  if (num2 > num1) {
    return gcd(num2, num1);
  }
  if (!num2) {
    return num1.toString();
  }
  return gcd(num2, num1 % num2);
};

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);

  return { description, question, correctAnswer };
};

export default gcdGame;
