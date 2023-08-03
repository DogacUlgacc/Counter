let counter = document.getElementById("counter");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let counterValue = 0;

decrease.addEventListener("click", () => {
    counterValue = counterValue - 1;
    counter.textContent = counterValue;
});

increase.addEventListener("click", () => {
    counterValue = counterValue + 1;
    counter.textContent = counterValue;
});

reset.addEventListener("click", () => {
    counterValue = 0;
    counter.textContent = counterValue;
});
