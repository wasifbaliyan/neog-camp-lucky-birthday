const luckyNum = document.querySelector("#lucky-num");
const bday = document.querySelector("#bday");
const form = document.querySelector(".form");
const section = document.querySelector("section");
const result = document.querySelector(".result");
const model = document.querySelector(".model");
const modelBtn = document.querySelector(".model-btn");
const img = document.querySelector(".img");

img.style.display = "none";
model.style.display = "none";

setTimeout(() => {
  model.style.display = "";
}, 5000);

modelBtn.addEventListener("click", () => {
  model.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dateSum = bday.value.split("-").reduce((a, c) => {
    return Number(a) + Number(c);
  }, 0);
  const luckyNumber = Number(luckyNum.value);

  const areYouLucky = dateSum % luckyNumber === 0 ? true : false;
  console.log(areYouLucky);
  luckyNum.value = "";
  bday.value = "";

  section.classList.add("lucky-section");

  if (areYouLucky) {
    result.textContent = "Congratulations, You're lucky person.";
    img.style.display = "block";
    img.src = "/assets/happy.svg";
  } else {
    result.textContent = `OHHH! You're missed by ${
      dateSum % luckyNumber
    } days from being lucky.`;

    img.style.display = "block";
    img.src = "/assets/sad.svg";
  }
});
