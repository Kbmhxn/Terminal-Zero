const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const loading = document.getElementById("loading");
const app = document.getElementById("app");
const logBox = document.getElementById("log");

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    app.classList.remove("hidden");
    log("System initialized (simulation)");
  }, 2000);
};

function showSim(id) {
  document.querySelectorAll(".sim").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  log("Opened " + id + " module");
}

function log(text) {
  logBox.innerHTML += "[SIM] " + text + "<br>";
  logBox.scrollTop = logBox.scrollHeight;
}

function logSim(text) {
  log("✔ " + text);
}
