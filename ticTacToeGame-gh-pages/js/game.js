for (let i = 0; i < 9; i++) {
  document.getElementById("game").innerHTML +=
    "<button class='block'></button>";
}
const game = document.getElementById("game");
game.addEventListener("click", () => {
  let step = 0;
  if (event.target.className == "block") {
    if (step == 0) {
      event.target.innerHTML = "x";
    } else {
      event.target.innerHTML = "0";
    }
    step++;
  }
});
