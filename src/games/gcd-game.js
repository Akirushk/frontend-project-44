import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const makeStringToArr = (text) => {
  const arr = text.split(' ');
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(Number(arr[i]));
  }
  return result;
};

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return `${getRandomNum(min, max)} ${getRandomNum(min, max)}`;
};

const doVerification = (question) => {
  const arr = makeStringToArr(question);
  let [num1, num2] = arr;
  let remainder;

  while (remainder !== 0) {
    remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  return String(num1);
};

const play = () => {
  run(description, getQuestion, doVerification);
};

export default play;
