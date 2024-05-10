import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';
import getRandomNum from './get-random-num.js';
import checkEvenNum from './check-even-num.js';

const userAnswerHandler = () => {
    greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let randomNum = getRandomNum(0, 100);
    let correctAnswerCount = 0;

    do {
        randomNum = getRandomNum(0, 100);
        console.log(`Question: ${randomNum}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== checkEvenNum(randomNum)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${checkEvenNum(randomNum)}'.\nLet's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
      
        correctAnswerCount += 1;
      
    } while (correctAnswerCount < 3);
       
  console.log(`Congratulations, ${userName}!`);
};

export default userAnswerHandler;