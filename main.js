const lottoDisplay = document.querySelector(".lotto-display");
const generateBtn = document.querySelector("#generate-btn");
const themeBtn = document.querySelector("#theme-btn");
const body = document.body;

// Theme logic
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
    body.classList.remove("light-mode");
} else {
    body.classList.add("light-mode");
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
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
    numbers.forEach((number, index) => {
        const lottoBall = document.createElement("div");
        lottoBall.classList.add("lotto-ball");
        lottoBall.textContent = number;
        // Staggered animation
        lottoBall.style.animationDelay = `${index * 0.1}s`;
        lottoDisplay.appendChild(lottoBall);
    });
}
