import getRandomNum from '../get-random-num.js';
import play from '../main_logic/index.js';

const gcdEngine = () => {
    const rules = 'Find the greatest common divisor of given numbers.';
    
    const question = (max, min) => {
        return `${getRandomNum(max, min)} ${getRandomNum(max, min)}`
      };
      
    const verification = (text) => {
        const arr = text.split(' ');
        
        let num1 = Number(arr[0]);
        let num2 = Number(arr[1]);
        let remainder;
      
        
        while (remainder !== 0) {
          remainder = num1 % num2;
          
          num1 = num2;
          num2 = remainder;
        }
        return String(num1);  
      };

    play(rules, question, verification);
};

export default gcdEngine;