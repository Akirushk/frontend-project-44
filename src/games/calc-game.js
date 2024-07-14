import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const makeCalc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const countExpression = (num1, operator, num2) => makeCalc(num1, operator, num2);

const getRandomOperator = () => {
  const random = getRandomNum(0, OPERATORS.length - 1);

  return OPERATORS[random];
};

const getQuestion = () => {
  const operand1 = getRandomNum(0, 100);
  const operator = getRandomOperator();
  const operand2 = getRandomNum(0, 100);

  return `${operand1} ${operator} ${operand2}`;
};

const getAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  const result = countExpression(num1, operator, num2);

  return String(result);
};

const play = () => {
  run(description, getQuestion, getAnswer);
};

export default play;
