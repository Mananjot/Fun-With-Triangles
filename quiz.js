const form = document.querySelector("#formQuiz");
const btnQuiz = document.querySelector("#btnQuiz");
const result = document.querySelector(".result");

correctAnswers = ["right", "equilateral", "180", "2", "acute"];
btnQuiz.addEventListener("click", () => {
  result.style.display = "block";
  var formResult = new FormData(form);
  var score = 0;
  var index = 0;
  for (var givenAnswer of formResult.values()) {
    console.log(givenAnswer);
    if (givenAnswer === correctAnswers[index]) {
      console.log("Inside loop");
      score++;
    }
    index++;
  }
  console.log(score);
  result.innerText = "You Scored:" + score;
});