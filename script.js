const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const loading = document.getElementById("loading");
const menu = document.getElementById("menu");
const logBox = document.getElementById("logBox");

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    menu.classList.remove("hidden");
    log("System ready (simulation)");
  }, 2000);
};

function openModule(id) {
  menu.classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  log("Opened " + id + " module");
}

function goBack() {
  document.querySelectorAll(".module").forEach(m => m.classList.add("hidden"));
  menu.classList.remove("hidden");
  log("Returned to main menu");
}

function log(text) {
  logBox.innerHTML += "[SIM] " + text + "<br>";
  logBox.scrollTop = logBox.scrollHeight;
}

