import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const makeStringToArr = (text) => {
  const arr = text.split(' ');
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(Number(arr[i]));
  }
  return result;
};

const play = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const getQuestion = () => {
    const min = 0;
    const max = 100;

    return `${getRandomNum(min, max)} ${getRandomNum(min, max)}`;
  };

  const doVerification = (question) => {
    const arr = makeStringToArr(question);
    let [Num1, Num2] = arr;
    let remainder;

    while (remainder !== 0) {
      remainder = Num1 % Num2;
      Num1 = Num2;
      Num2 = remainder;
    }
    return String(Num1);
  };

  run(description, getQuestion, doVerification);
};

export default play;
