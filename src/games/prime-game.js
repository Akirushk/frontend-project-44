import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return getRandomNum(min, max);
};

const doVerification = (question) => (isPrime(question) ? 'yes' : 'no');

const play = () => {
  run(description, getQuestion, doVerification);
};

export default play;
