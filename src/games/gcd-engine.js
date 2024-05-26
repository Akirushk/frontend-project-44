import getRandomNum from '../get-random-num.js';
import run from '../main_logic/index.js';

const makeStringToArr = (text) => {
  const arr = text.split(' ');
  let result = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    result.push(Number(arr[i]));
  }
  return result;
};

const play = () => {
    const description = `Find the greatest common divisor of given numbers.`;
    
    const getQuestion = () => {
      const min = 0;
      const max = 100;

      return `${getRandomNum(min, max)} ${getRandomNum(min, max)}`
      };
      
      const doVerification = (question) => {
        const arr = makeStringToArr(question);
        let remainder;
        
        while (remainder !== 0) {
          remainder = arr[0] % arr[1];
          arr[0] = arr[1];
          arr[1] = remainder;
        }
        return String(arr[0]);  
      };

    run(description, getQuestion, doVerification);
};

export default play;