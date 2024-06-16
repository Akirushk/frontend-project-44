import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operators.length);

  return operators[random];
};

const getQuestion = () => {
  const min = 0;
  const max = 100;

  return `${getRandomNum(min, max)} ${getRandomOperator()} ${getRandomNum(min, max)}`;
};

const doVerification = (question) => {
  const arr = question.split(' ');
  const operator = arr[1];
  const num1 = arr[0];
  const num2 = arr[2];
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
    // no default
  }
  return String(result);
};

const play = () => {
  run(description, getQuestion, doVerification);
};

export default play;
