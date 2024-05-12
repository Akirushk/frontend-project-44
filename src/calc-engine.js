import getRandomNum from './get-random-num.js';
import play from './index.js';

const generateRandomOperator = () => {
    const arr = ['+', '-', '*'];
      let randomNum = Math.floor(Math.random() * arr.length); 
    return arr[randomNum];
  };  

const calcEngine = () => {
    const operator = generateRandomOperator();
    const firstNum = getRandomNum(0, 100);
    const secondNum = getRandomNum(0, 100);
    
    let result = eval(firstNum + operator + secondNum);

    const rules = 'What is the result of the expression?';
    const question = `${firstNum} ${operator} ${secondNum}`;
    const verification = String(result);

    play(rules, question, verification);
};

export default calcEngine;