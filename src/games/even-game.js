import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestion = () => getRandomNum(0, 100);

const getAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const play = () => {
  run(DESCRIPTION, getQuestion, getAnswer);
};

export default play;
