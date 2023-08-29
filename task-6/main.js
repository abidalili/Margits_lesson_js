const generateButton = document.getElementById("generateButton");
const questionInput = document.getElementById("question");
const answerText = document.getElementById("answer");

generateButton.addEventListener("click", () => {
  const question = questionInput.value.trim();

  if (question === "") {
    answerText.textContent = "Please enter a question.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * 10);

  switch (randomIndex) {
    case 0:
      answerText.textContent = "Yes";
      break;
    case 1:
      answerText.textContent = "No";
      break;
    case 2:
      answerText.textContent = "Maybe";
      break;
    case 3:
      answerText.textContent = "Try again later";
      break;
    case 4:
      answerText.textContent = "Definitely";
      break;
    case 5:
      answerText.textContent = "Certainly not";
      break;
    case 6:
      answerText.textContent = "Outlook not so good";
      break;
    case 7:
      answerText.textContent = "It is uncertain";
      break;
    case 8:
      answerText.textContent = "Without a doubt";
      break;
    case 9:
      answerText.textContent = "Ask again tomorrow";
      break;
    default:
      answerText.textContent = "Unable to provide an answer.";
      break;
  }
});
