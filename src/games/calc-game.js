import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const addition = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const calculate = (num1, operator, num2) => {
  const number1 = Number(num1);
  const number2 = Number(num2);

  switch (operator) {
    case '+':
      return addition(number1, number2);
    case '-':
      return subtraction(number1, number2);
    case '*':
      return multiplication(number1, number2);
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
  const operator = getRandomOperator();
  const operand2 = getRandomNum(0, 100);

  return `${operand1} ${operator} ${operand2}`;
};

const getAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  const result = calculate(num1, operator, num2);

  return String(result);
};

const play = () => {
  run(DESCRIPTION, getQuestion, getAnswer);
};

export default play;
