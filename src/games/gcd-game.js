import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const parseQuestion = (text) => {
  const arr = text.split(' ');
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(Number(arr[i]));
  }

  return result;
};

const countExpression = (num1, num2) => {
  let remainder;
  let dividend = num1;
  let divisor = num2;

  while (remainder !== 0) {
    remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  return dividend;
};

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return `${getRandomNum(min, max)} ${getRandomNum(min, max)}`;
};

const getAnswer = (question) => {
  const [num1, num2] = parseQuestion(question);
  const result = countExpression(num1, num2);

  return String(result);
};

const play = () => {
  run(description, getQuestion, getAnswer);
};

export default play;
