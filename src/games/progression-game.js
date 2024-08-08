import getRandomNum from '../get-random-num.js';
import run from '../index.js';

const DESCRIPTION = 'What number is missing in the progression?';

const createProgression = () => {
  const progression = [];
  const step = getRandomNum(1, 5);
  const arrLength = getRandomNum(5, 10);
  let item = getRandomNum(0, 50);

  for (let i = 0, j = 0; i < arrLength; i += 1, j = step) {
    item += j;
    progression.push(item);
  }

  return progression;
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
  const progression = createProgression();
  const hiddenIndex = getRandomNum(0, progression.length);

  progression[hiddenIndex] = '..';

  return progression.join(' ');
};

const getAnswer = (question) => {
  const progression = question.split(' ');
  const step = getStep(progression);
  let result;

  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === '..') {
      if (i === 0) {
        result = Number(progression[i + 1]) - step;
      } else {
        result = Number(progression[i - 1]) + step;
      }
    }
  }
  return String(result);
};

const play = () => {
  run(DESCRIPTION, getQuestion, getAnswer);
};

export default play;
