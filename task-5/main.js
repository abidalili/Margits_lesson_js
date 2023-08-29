const calcGasoline = () => {
  const price = document.querySelector("#price");

  const money = document.querySelector("#money");
  const answer = document.querySelector("#answer");
  let amount = (money.value / price.value).toFixed(2);
  console.log(amount);
  let text;
  amount >= 10
    ? (text = `You could get about ${amount} liters, you can escape`)
    : `You could get about ${amount} liters, sorry you have to stay`;
  answer.textContent = text;
};
