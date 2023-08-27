// // task - 1
// const celsiusInput = prompt("Enter temperature in Celsius:");
// const celsius = parseFloat(celsiusInput);

// if (celsius <= 15) {
//   console.log("wear a jacket");
// } else {
//   console.log("You don't need to wear a jacket");
// }

//

// let salaryPerHour = parseFloat(prompt("Whats your salary per hour?"));
// let hoursWorkedPerDay = parseFloat(
//   prompt("how many hours you worked in a day?")
// );

// let Day_salary = 0;

// if (hoursWorkedPerDay <= 7) {
//   Day_salary = salaryPerHour * hoursWorkedPerDay;
// } else if (hoursWorkedPerDay <= 9) {
//   Day_salary =
//     salaryPerHour * 7 + (hoursWorkedPerDay - 7) * salaryPerHour * 1.5;
// } else {
//   Day_salary =
//     7 * salaryPerHour +
//     2 * salaryPerHour * 1.5 +
//     (hoursWorkedPerDay - 9) * salaryPerHour * 2;
// }

// console.log(`Your Salary Per Day is: ${Day_salary}`);
// let first_number = parseInt(prompt("Please Enter a number"));
// let second_number = parseInt(prompt("Please Enter a number"));
// let third_number = parseInt(prompt("Please Enter a number"));

// function Total(num1, num2, num3) {
//   if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     alert("Please enter valid numbers");
//     return;
//   }

//   if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
//     const sum = num1 + num2 + num3;
//     console.log("Sum:", sum);
//   } else if (num1 < 0 && num2 < 0 && num3 < 0) {
//     console.log("Only Negative");
//   } else {
//     const multiplication = num1 * num2 * num3;
//     console.log("Multiplication:", multiplication);
//   }
// }

// Total(first_number, second_number, third_number);

const randomNumber = () => {
  let num1 = parseInt(prompt("Please Enter a number"));
  let num2 = parseInt(prompt("Please Enter a number"));
  let num3 = parseInt(prompt("Please Enter a number"));

  let multiplication = num1 * num2 * num3;
  let sum = num1 + num2 + num3;

  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log("sum is:", sum, " and multi is : ", multiplication);
  } else if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
    console.log(`sum is $ {sum}`);
  } else {
    console.log("all neg");
  }
};
randomNumber();
