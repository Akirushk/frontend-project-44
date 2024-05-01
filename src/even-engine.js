import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import getRandomNum from '../src/random-num.js';
import evenNumDeterminant from '../src/even-or-odd.js';

const userAnswerHandler = () => {
    let randomNum = getRandomNum(0, 100);
    let correctAnswerCount = 0;

    do {
        randomNum = getRandomNum(0, 100);
        console.log(`Question: ${randomNum}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== evenNumDeterminant(randomNum)) {
            return `'${userAnswer}' is wrong answer ;(. Correct answer was '${evenNumDeterminant(randomNum)}'.
            Let's try again, ${userName}!`;
        }

        console.log('Correct!');
      
        correctAnswerCount += 1;
      
    } while (correctAnswerCount < 3);
       
  return `Congratulations, ${userName}!`;
};

export default userAnswerHandler;