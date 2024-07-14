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

const getQuestion = () => getRandomNum(0, 100);

const getAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const play = () => {
  run(description, getQuestion, getAnswer);
};

export default play;
