const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("highlight"));
    cards[index].classList.add("highlight");
  });
});