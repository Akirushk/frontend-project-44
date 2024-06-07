import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const makeProgression = () => {
  const arr = [];
  const num = getRandomNum(1, 5);
  const arrLength = getRandomNum(5, 10);
  let result = getRandomNum(0, 50);

  for (let i = 0, j = 0; i < arrLength; i += 1, j = num) {
    result += j;
    arr.push(result);
  }
  return arr;
};

let answer;

const getQuestion = () => {
  const arr = makeProgression();
  const random = Math.floor(Math.random() * arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    if (i === random) {
      answer = arr[i];
      arr[i] = '..';
    }
  }
  return arr.join(' ');
};

const doVerification = () => String(answer);

const play = () => {
  const description = 'What number is missing in the progression?';

  run(description, getQuestion, doVerification);
};

export default play;
