import getRandomInt from '../src/getRandomInt.js';

const isEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = getRandomInt();
  const question = `Question: ${number}`;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { description, question, correctAnswer };
};

export default isEvenGame;
