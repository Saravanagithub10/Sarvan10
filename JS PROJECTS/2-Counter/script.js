const counterValue = document.getElementById("counter-value");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");

let count = 0;

function updateCounterDisplay() {
  counterValue.textContent = count;
}

incrementButton.addEventListener("click", () => {
  count++;
  updateCounterDisplay();
});

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounterDisplay();
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounterDisplay();
});
