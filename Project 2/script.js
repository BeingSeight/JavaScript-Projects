let count = 0;

const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCounter() {
    counterDisplay.textContent = count;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    if (count > 0) {
        count--;
    }
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

updateCounter();