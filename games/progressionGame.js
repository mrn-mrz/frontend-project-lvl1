import getRandomInt from '../src/getRandomInt.js';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  const coll = [];
  const minLength = 5;
  const maxLength = 11;
  const collLength = getRandomInt(minLength, maxLength);
  const firstNumber = getRandomInt();
  const step = getRandomInt();
  const itemPosition = getRandomInt(0, collLength);
  coll[0] = firstNumber;
  for (let i = 1; i < collLength; i += 1) {
    coll[i] = coll[i - 1] + step;
  }
  const correctAnswer = coll[itemPosition].toString();
  coll[itemPosition] = '..';
  const question = `Question: ${coll.join(' ')}`;

  return { description, question, correctAnswer };
};

export default progressionGame;
