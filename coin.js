let coins = 0;
let coinsPerClick = 1;
let autoClickInterval;

function updateCoins() {
  document.getElementById("coin-count").textContent = `${coins} شیخ الاسلامی`;
  localStorage.setItem("sheikhCoins", coins);
}

document.getElementById("click-target")?.addEventListener("click", () => {
  coins += coinsPerClick;
  updateCoins();
});

// Telegram login
function onTelegramAuth(user) {
  localStorage.setItem("telegramUser", JSON.stringify(user));
  showGame(user);  // After successful login, call this function to show the game
}

function showGame(user) {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  document.getElementById("telegram-user").textContent = `👤 ${user.first_name} وارد شد`;

  // Load previous saved coins and upgrades if any
  coins = parseInt(localStorage.getItem("sheikhCoins")) || 0;
  coinsPerClick = parseInt(localStorage.getItem("coinsPerClick")) || 1;

  // Check if the auto-click upgrade was purchased
  const fatwaBought = localStorage.getItem("fatwaBought");
  if (fatwaBought === "true") startAutoClick();

  updateCoins();
}

// Handle Upgrades
function buyUpgrade(type) {
  if (type === "tasbih" && coins >= 50) {
    coins -= 50;
    coinsPerClick += 1;
  } else if (type === "amameh" && coins >= 200) {
    coins -= 200;
    coinsPerClick += 3;
  } else if (type === "aba" && coins >= 500) {
    coins -= 500;
    coinsPerClick += 10;
  } else if (type === "fatwa" && coins >= 1000) {
    coins -= 1000;
    startAutoClick();
    localStorage.setItem("fatwaBought", "true");
  } else {
    alert("سکه کافی نداری برادر!");
    return;
  }

  updateCoins();
  localStorage.setItem("coinsPerClick", coinsPerClick);
}

function startAutoClick() {
  if (autoClickInterval) return;
  autoClickInterval = setInterval(() => {
    coins += 1;
    updateCoins();
  }, 1000);
}

// Restore game
window.onload = function () {
  const savedUser = localStorage.getItem("telegramUser");
  if (savedUser) {
    showGame(JSON.parse(savedUser));  // Show the game if the user is already logged in
  }
};
