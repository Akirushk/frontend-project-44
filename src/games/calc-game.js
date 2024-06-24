import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const parseQuestion = (text) => {
  const arr = text.split(' ');

  return arr;
};

const count = (arr) => {
  const [num1, operator, num2] = arr;
  let result;

  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return result;
};

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = getRandomNum(0, operators.length);

  return operators[random];
};

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return `${getRandomNum(min, max)} ${getRandomOperator()} ${getRandomNum(min, max)}`;
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
