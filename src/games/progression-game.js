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

const getStep = (arr) => {
  let step;
  let i = 0;

  do {
    step = Number(arr[i + 1]) - Number(arr[i]);
    i += 1;
  } while (Number.isNaN(step));

  return step;
};

const getQuestion = () => {
  const arr = createProgression();
  const hiddenIndex = getRandomNum(0, arr.length);

  arr[hiddenIndex] = '..';

  return arr.join(' ');
};

const getAnswer = (question) => {
  const progression = question.split(' ');
  let result;

  for (let j = 0; j < progression.length; j += 1) {
    if (progression[j] === '..') {
      if (j === 0) {
        result = Number(progression[j + 1]) - getStep(progression);
      } else {
        result = Number(progression[j - 1]) + getStep(progression);
      }
    }
  }
  return String(result);
};

const play = () => {
  run(description, getQuestion, getAnswer);
};

export default play;
