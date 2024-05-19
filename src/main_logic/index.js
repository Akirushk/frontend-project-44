import readlineSync from 'readline-sync';

const play = (rules, question, verification) => {
    console.log('Welcome to the Brain Games!');

    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');

    console.log(rules);

    let correctAnswerCount = 0;

    do {
        let equation = question(0, 100);
        console.log(`Question: ${equation}`);

        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== verification(equation)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${verification(equation)}'.\nLet's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
      
        correctAnswerCount += 1;
      
    } while (correctAnswerCount < 3);
       
  console.log(`Congratulations, ${userName}!`);
};

export default play;