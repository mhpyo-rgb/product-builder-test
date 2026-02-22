const lottoDisplay = document.querySelector(".lotto-display");
const generateBtn = document.querySelector("#generate-btn");
const themeBtn = document.querySelector("#theme-btn");
const body = document.body;

// Theme logic
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    body.classList.add("light-mode");
    themeBtn.textContent = "Dark Mode";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
});

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
