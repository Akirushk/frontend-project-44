import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const getQuestion = () => getRandomNum(0, 100);

const getAnswer = (question) => (isEvenNum(question) ? 'yes' : 'no');

const play = () => {
  run(description, getQuestion, getAnswer);
};

export default play;
