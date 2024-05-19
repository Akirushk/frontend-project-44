import getRandomNum from '../get-random-num.js';
import play from '../main_logic/index.js';

const calcEngine = () => {
  
  const getRandomOperator = () => {
  const arr = ['+', '-', '*'];
  let random = Math.floor(Math.random() * arr.length); 
  return arr[random];
  }; 

  const rules = 'What is the result of the expression?';
  
  const question = (max, min) => {
     return `${getRandomNum(max, min)} ${getRandomOperator()} ${getRandomNum(max, min)}`
  };
  
  const verification = (smth) => {
    let result = eval(smth);
    return String(result);
  };

  play(rules, question, verification);
};

export default calcEngine;