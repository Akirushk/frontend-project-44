import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = () => {
  const arr = [];
  const step = getRandomNum(1, 5);
  const arrLength = getRandomNum(5, 10);
  let result = getRandomNum(0, 50);

  for (let i = 0, j = 0; i < arrLength; i += 1, j = step) {
    result += j;
    arr.push(result);
  }

  return arr;
};

const getQuestion = () => {
  const arr = createProgression();
  const random = getRandomNum(0, arr.length);

  for (let i = 0; i < arr.length; i += 1) {
    if (i === random) {
      arr[i] = '..';
    }
  }

  return arr.join(' ');
};

const doVerification = (question) => {
  const progression = question.split(' ');
  let step;
  let result;
  let i = 0;

  do {
    step = Number(progression[i + 1]) - Number(progression[i]);
    i += 1;
  } while (Number.isNaN(step));

  for (let j = 0; j < progression.length; j += 1) {
    if (progression[j] === '..') {
      if (j === (progression.length - 1)) {
        result = Number(progression[j - 1]) + step;
      } else {
        result = Number(progression[j + 1]) - step;
      }
    }
  }
  return String(result);
};

const play = () => {
  run(description, getQuestion, doVerification);
};

export default play;
