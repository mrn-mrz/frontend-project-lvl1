import getRandomInt from '../src/getRandomInt.js';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  const coll = [];
  const collLength = getRandomInt(5, 11);
  const firstNumber = getRandomInt(0, 50);
  const step = getRandomInt(1, 25);
  const itemPosition = getRandomInt(0, collLength);
  coll[0] = firstNumber;
  for (let i = 1; i < collLength; i += 1) {
    coll[i] = coll[i - 1] + step;
  }
  const correctAnswer = coll[itemPosition].toString();
  coll[itemPosition] = '..';
  const question = `Question: ${coll}`;

  return { description, question, correctAnswer };
};

export default progressionGame;
