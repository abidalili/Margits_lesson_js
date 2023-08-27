let userName = "";

if (userName !== "") {
  console.log(`Hello, ${userName}`);
} else {
  console.log("Hello");
}

let userQuestion = "What did you learn today??";

console.log("User Name:", userName);
console.log("User Question:", userQuestion);

//Even or odd

function isPositive(number) {
  return number > 0;
}

function isEven(number) {
  return number % 2 === 0;
}

function getNumberFromUser() {
  let userInput = parseFloat(prompt("Please enter a number:"));

  while (!isPositive(userInput)) {
    alert("Please enter a positive number.");
    userInput = parseFloat(prompt("Please enter a number:"));
  }

  return userInput;
}

let userNumber = getNumberFromUser();

if (isEven(userNumber)) {
  console.log(`Number ${userNumber} is even.`);
} else {
  console.log(`Number ${userNumber} is odd.`);
}

//decision making app

const randomNumber = Math.floor(Math.random() * 10) + 1;

let statements = [
  "The stars say yes, go for it!",
  "Trust your instincts and take the leap.",
  "Hmm, better try again later.",
  "Consider all options before making a move.",
  "Outlook is bright, proceed with confidence.",
  "Seek advice from a trusted friend before deciding.",
  "Signs point to unexpected opportunities.",
  "It's a toss-up, make a choice and see what happens.",
  "Take a step back and reassess before moving forward.",
  "Not the right time, patience will bring better results.",
];

let decision = statements[randomNumber - 1];
console.log(decision);
