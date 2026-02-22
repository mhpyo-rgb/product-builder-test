const lottoDisplay = document.querySelector(".lotto-display");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    displayLottoNumbers(sortedNumbers);
}

function displayLottoNumbers(numbers) {
    lottoDisplay.innerHTML = "";
    for (const number of numbers) {
        const lottoBall = document.createElement("div");
        lottoBall.classList.add("lotto-ball");
        lottoBall.textContent = number;
        lottoDisplay.appendChild(lottoBall);
    }
}
