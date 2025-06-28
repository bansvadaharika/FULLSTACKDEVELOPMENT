// 1. Create an array named questions with 5 objects
const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "Which continent is the Sahara Desert located on?",
    choices: ["Africa", "Asia", "Australia"],
    answer: "Africa"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is 7 multiplied by 8?",
    choices: ["54", "56", "58"],
    answer: "56"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare"
  }
];

// 2. Function to get a random question object
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 3. Function to get a random computer choice from choices array
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// 4. Function to check if computer's choice is correct
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
