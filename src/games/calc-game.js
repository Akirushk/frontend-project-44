import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operators.length);

  return operators[random];
};

const play = () => {
  const description = 'What is the result of the expression?';

  const getQuestion = () => {
    const min = 0;
    const max = 100;

    return `${getRandomNum(min, max)} ${getRandomOperator()} ${getRandomNum(min, max)}`;
  };

  const doVerification = (question) => {
    const result = this.eval(question);

    return String(result);
  };

  run(description, getQuestion, doVerification);
};

export default play;
