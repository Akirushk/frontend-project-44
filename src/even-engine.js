import getRandomNum from './get-random-num.js';
import play from './index.js';

const checkEvenNum = (num) => (num % 2 === 0 ? 'yes' : 'no');
const updateQuestion = () => {
    return getRandomNum(0, 100);
  };

const evenEngine = () => {

    const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    const question = updateQuestion();
    const verification = checkEvenNum(question); 

    play(rules, question, verification);
}

export default evenEngine;