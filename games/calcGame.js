import getRandomInt from '../src/getRandomInt.js';

const calc = () => {
  const description = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];
  let correctAnswer = null;
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const number1 = getRandomInt(0, 50);
  const number2 = getRandomInt(0, 50);
  const question = `Question: ${number1} ${randomOperation} ${number2}`;
  if (randomOperation === '+') {
    correctAnswer = (number1 + number2).toString();
  } else
  if (randomOperation === '-') {
    correctAnswer = (number1 - number2).toString();
  } else {
    correctAnswer = (number1 * number2).toString();
  }
  return { description, question, correctAnswer };
};

export default calc;
