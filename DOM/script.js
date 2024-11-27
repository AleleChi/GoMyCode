document.getElementById("submit-btn").addEventListener("click", evaluateQuiz);

function evaluateQuiz() {
  let score = 0;

  const correctAnswers = {
    q1: "Mars",
    q2: "Tokyo",
  };

  const quizForm = document.getElementById("quiz-form");
  for (let question in correctAnswers) {
    const userAnswer = quizForm[question].value;
    if (userAnswer === correctAnswers[question]) {
      score++;
    }
  }

  alert(`You scored ${score}/${Object.keys(correctAnswers).length}!`);
}
