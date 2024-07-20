
const questions = [
    "What is 7 multiplied by 8?",
    "What is the square root of 144?",
    "What is 15 divided by 3?",
    "What is 9 plus 6?",
    "What is the value of π (pi)?",
    "What is the result of 4 squared?",
    "What is the sum of the interior angles of a triangle?",
    "What is the smallest prime number?",
    "What is the opposite of addition?",
    "What is the term for a number that can be divided evenly by 2?"
];
const answers = [];
function askQuestions() {
    for (let i = 0; i < questions.length; i++) {
        let answer = prompt(questions[i]);
        answers.push(answer);
    }
    alert("Your answers:\n" + answers.join("\n"));
}
askQuestions();
