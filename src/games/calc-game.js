import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return add(number1, number2);
    case '-':
      return subtract(number1, number2);
    case '*':
      return multiply(number1, number2);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRandomOperator = () => {
  const random = getRandomNum(0, OPERATORS.length - 1);

  return OPERATORS[random];
};

const getQuestion = () => {
  const operand1 = getRandomNum(0, 100);
  const operand2 = getRandomNum(0, 100);
  const operator = getRandomOperator();

  return `${operand1} ${operator} ${operand2}`;
};

const getAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  const number1 = Number(num1);
  const number2 = Number(num2);

  const result = calculate(number1, number2, operator);

  return String(result);
};

const play = () => {
  run(DESCRIPTION, getQuestion, getAnswer);
};

export default play;
