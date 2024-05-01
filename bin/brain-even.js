import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const getRandomNum = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const evenNumDeterminant = (num) => (num % 2 === 0 ? 'yes' : 'no');

const userAnswerHandler = () => {
    let randomNum = getRandomNum(0, 100);
    let correctAnswerCount = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    do {
        randomNum = getRandomNum(0, 100);
        console.log(`Question: ${randomNum}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== evenNumDeterminant(randomNum)) {
            return `'${userAnswer}' is wrong answer ;(. Correct answer was '${evenNumDeterminant(randomNum)}'.
            Let's try again, ${userName}!`
        }

        console.log('Correct!');
      
        correctAnswerCount += 1;
      
    } while (correctAnswerCount < 3);
       
  return `Congratulations, ${userName}!`
};