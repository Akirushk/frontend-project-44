import readlineSync from 'readline-sync';

const run = (description, getQuestion, verify) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(description);

  let correctAnswerCount = 0;

  do {
    const question = getQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = verify(question);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    correctAnswerCount += 1;
  } while (correctAnswerCount < 3);

  console.log(`Congratulations, ${userName}!`);
};

export default run;
