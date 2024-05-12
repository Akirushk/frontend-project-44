import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

const play = (rules, question, verification) => {
    let correctAnswerCount = 0;

    greeting();

    console.log(rules);

    do {
        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== verification) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${verification}'.\nLet's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
      
        correctAnswerCount += 1;
      
    } while (correctAnswerCount < 3);
       
  console.log(`Congratulations, ${userName}!`);
};

export default play;