import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const parseQuestion = (text) => {
  const arr = text.split(' ');
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(Number(arr[i]));
  }

  return result;
};

const count = (numbers) => {
  let [num1, num2] = numbers;
  let remainder;

  while (remainder !== 0) {
    remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  return num1;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return `${getRandomNum(min, max)} ${getRandomNum(min, max)}`;
};

const doVerification = (question) => {
  const arr = parseQuestion(question);
  const result = count(arr);

  return String(result);
};

const play = () => {
  run(description, getQuestion, doVerification);
};

export default play;
