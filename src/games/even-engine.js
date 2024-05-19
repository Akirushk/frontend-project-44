import getRandomNum from '../get-random-num.js';
import play from '../main_logic/index.js';

const evenEngine = () => {

    const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    const question = (max, min) => {
      return getRandomNum(max, min);
  };
    const verification = (num) => (num % 2 === 0 ? 'yes' : 'no');

    play(rules, question, verification);
}

export default evenEngine;