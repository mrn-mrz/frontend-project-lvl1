import readlineSync from 'readline-sync';
import greeting from './cli.js';

const name = greeting();

// const app = (description, question, correctAnswer, count = 0) => {
//     console.log(description);
//     if (count === 3) {
//         console.log(`Congratulations, ${name}!`);
//     } else {
//         console.log(question);
//         const answer = readlineSync.question('Answer: ');

//         if (answer === correctAnswer) {
//             console.log('Correct!');
//             count += 1;
//             app(question, correctAnswer, count);
//         } else {
//            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//            console.log(`Let's try again, ${name}!`);
//         }
//     }
// }

const app = (game, count = 0) => {
  const { description, question, correctAnswer } = game();
  if (count === 0) {
    console.log(description);
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(question);
    const answer = readlineSync.question('Answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      const newCount = count + 1;
      app(game, newCount);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
};

export default app;
