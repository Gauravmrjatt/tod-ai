const words = {
    easy: ["CAT", "DOG", "BALL", "FISH", "LION", "APPLE", "MANGO", "ZEBRA"],
    medium: ["ELEPHANT", "BUTTERFLY", "KANGAROO", "GIRAFFE", "DOLPHIN", "TIGER", "MONKEY", "PENGUIN"],
    hard: ["RHINOCEROS", "HIPPOPOTAMUS", "CHAMELEON", "CROCODILE", "KOMODO", "OCTOPUS", "PLATYPUS", "ARMADILLO"]
};

let currentWord = "";
let clickedSequence = [];
let score = 0;
let level = 1;
let voicesLoaded = false;
let selectedVoice = null;
let bubbles = [];
let timer = null;
let timeLeft = 30;
let isSoundEnabled = true;
let isMusicEnabled = true;
let currentDifficulty = "easy";

const targetDisplay = document.getElementById("targetWord");
const bubbleContainer = document.getElementById("bubbleContainer");
const scoreDisplay = document.getElementById("score");
const emojiDisplay = document.getElementById("emojiDisplay");
const timerDisplay = document.getElementById("timer");
const popSound = document.getElementById("popSound");
const correctSound = document.getElementById("correctSound");
const winSound = document.getElementById("winSound");
const failSound = document.getElementById("failSound");
const backgroundMusic = document.getElementById("backgroundMusic");
const hintButton = document.getElementById("hintButton");
const difficultySelect = document.getElementById("difficulty");
const toggleMusicBtn = document.getElementById("toggleMusic");
const toggleSoundBtn = document.getElementById("toggleSound");

// Initialize speech synthesis
function loadVoices() {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        selectedVoice = voices.find(v => v.name.includes("Samantha") || v.name.toLowerCase().includes("female")) ||
                      voices.find(v => v.lang.startsWith("en"));
        voicesLoaded = true;
    }
}

function speak(text, callback = null) {
    if (!voicesLoaded) loadVoices();

    const msg = new SpeechSynthesisUtterance(text);
    msg.pitch = 1;
    msg.rate = 0.5;
    msg.volume = 1;
    if (selectedVoice) msg.voice = selectedVoice;
    if (callback) msg.onend = () => callback();
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
}

// Sound controls
toggleMusicBtn.addEventListener("click", () => {
    isMusicEnabled = !isMusicEnabled;
    if (isMusicEnabled) {
        backgroundMusic.play().catch(e => console.log("Audio play failed:", e));
        toggleMusicBtn.textContent = "🎵";
    } else {
        backgroundMusic.pause();
        toggleMusicBtn.textContent = "🔇";
    }
});

toggleSoundBtn.addEventListener("click", () => {
    isSoundEnabled = !isSoundEnabled;
    toggleSoundBtn.textContent = isSoundEnabled ? "🔊" : "🔈";
});

// Difficulty selector
difficultySelect.addEventListener("change", () => {
    currentDifficulty = difficultySelect.value;
    resetGame();
});

function playSound(sound) {
    if (isSoundEnabled) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Sound play failed:", e));
    }
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 10) {
        timerDisplay.style.color = "#e74c3c";
        timerDisplay.style.animation = "pulse 1s infinite";
    } else {
        timerDisplay.style.color = "#2c3e50";
        timerDisplay.style.animation = "none";
    }
}

function handleTimeUp() {
    playSound(failSound);
    emojiDisplay.textContent = "⏰";
    speak("Time's up! Let's try another word.");
    setTimeout(() => {
        emojiDisplay.textContent = "🧠";
        startGame();
    }, 2000);
}

function getHint() {
    const remainingLetters = currentWord.slice(clickedSequence.length);
    if (remainingLetters.length > 0) {
        const nextLetter = remainingLetters[0];
        speak(`The next letter is ${nextLetter}`);
        highlightBubble(nextLetter);
    }
}

function highlightBubble(letter) {
    const bubble = bubbles.find(b => b.letter === letter);
    if (bubble) {
        bubble.el.style.animation = "highlight 1s infinite";
        setTimeout(() => {
            bubble.el.style.animation = "";
        }, 2000);
    }
}

function getDistractors(count, exclude) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];
    while (result.length < count) {
        const rand = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (!exclude.includes(rand) && !result.includes(rand)) result.push(rand);
    }
    return result;
}

function getRandomPosition() {
    const container = bubbleContainer.getBoundingClientRect();
    const x = Math.random() * (container.width - 60);
    const y = Math.random() * (container.height - 60);
    return { x, y };
}

function spawnBubbles() {
    bubbleContainer.innerHTML = "";
    bubbles = [];

    const letters = currentWord.split("");
    const distractorCount = letters.length + level;
    const distractors = getDistractors(distractorCount, letters);
    const all = [...letters, ...distractors].sort(() => Math.random() - 0.5);

    all.forEach(letter => {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = letter;

        const { x, y } = getRandomPosition();
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        const dx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.3 + 0.2);
        const dy = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.3 + 0.2);

        bubbleContainer.appendChild(bubble);

        const bubbleObj = { el: bubble, x, y, dx, dy, letter };
        bubbles.push(bubbleObj);

        bubble.onclick = () => handleBubbleClick(bubbleObj);
    });
}

function handleBubbleClick(bubbleObj) {
    const clickedLetter = bubbleObj.letter;
    const expectedLetter = currentWord[clickedSequence.length];

    playSound(popSound);

    if (clickedLetter === expectedLetter) {
        bubbleObj.el.remove();
        clickedSequence.push(clickedLetter);
        speak(`${clickedLetter} is correct`);

        if (clickedSequence.join("") === currentWord) {
            score += timeLeft; // Bonus points for remaining time
            level++;
            scoreDisplay.textContent = `Score: ${score}`;
            playSound(correctSound);
            celebrateWin(currentWord);
        }
    } else {
        playSound(failSound);
        emojiDisplay.textContent = "😔";
        speak(`Oops! That was incorrect. Let's try ${currentWord} again.`);
        setTimeout(() => {
            emojiDisplay.textContent = "🧠";
            spawnBubbles();
            clickedSequence = [];
        }, 2000);
    }
}

function celebrateWin(word) {
    targetDisplay.classList.add("celebrate");
    emojiDisplay.textContent = "🎉";
    speak(`Excellent! You spelled ${word}`, () => {
        playSound(winSound);
    });
    setTimeout(() => {
        targetDisplay.classList.remove("celebrate");
        emojiDisplay.textContent = "🧠";
        startGame();
    }, 4000);
}

function moveBubbles() {
    const container = bubbleContainer.getBoundingClientRect();

    bubbles.forEach(b => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x <= 0 || b.x >= container.width - 60) b.dx *= -1;
        if (b.y <= 0 || b.y >= container.height - 60) b.dy *= -1;

        b.el.style.left = `${b.x}px`;
        b.el.style.top = `${b.y}px`;
    });

    requestAnimationFrame(moveBubbles);
}

function resetGame() {
    score = 0;
    level = 1;
    scoreDisplay.textContent = `Score: ${score}`;
    startGame();
}

function startGame() {
    const wordList = words[currentDifficulty];
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    clickedSequence = [];
    targetDisplay.textContent = `Spell: ${currentWord}`;
    speak(`Can you spell the word ${currentWord}?`);
    spawnBubbles();
    startTimer();
}

// Initialize game
window.speechSynthesis.onvoiceschanged = loadVoices;

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadVoices();
    if (isMusicEnabled) {
        backgroundMusic.play().catch(e => console.log("Background music play failed:", e));
    }
    startGame();
    moveBubbles();
});

// Add event listeners
hintButton.addEventListener("click", getHint);

// Add CSS for new animations
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    @keyframes highlight {
        0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(255, 215, 0, 0); }
        100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
    }
`;
document.head.appendChild(style);
