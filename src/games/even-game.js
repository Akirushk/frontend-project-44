import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const getEvenNum = (num) => num % 2 === 0;

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return getRandomNum(min, max);
};

const doVerification = (question) => (getEvenNum(question) ? 'yes' : 'no');

const play = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  run(description, getQuestion, doVerification);
};

export default play;