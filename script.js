const startScreen = document.getElementById("startScreen");
const loadingScreen = document.getElementById("loadingScreen");
const menuScreen = document.getElementById("menuScreen");
const moduleScreen = document.getElementById("moduleScreen");

document.getElementById("startBtn").onclick = () => {
  startScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");
  }, 2200);
};

function openModule(id) {
  menuScreen.classList.add("hidden");
  moduleScreen.classList.remove("hidden");
  document.querySelectorAll(".module").forEach(m => m.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* BACK */
function backToMenu() {
  moduleScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
}

/* EXECUTOR SIM */
function simulateExecutor() {
  const c = document.getElementById("execConsole");
  c.innerHTML += "[SIM] Parsing script...\n";
  setTimeout(() => c.innerHTML += "[SIM] Validating syntax...\n", 500);
  setTimeout(() => c.innerHTML += "[SIM] Execution complete (simulation)\n", 1000);
  c.scrollTop = c.scrollHeight;
}

/* VIRUS SIM */
function scanThreat() {
  const c = document.getElementById("virusConsole");
  c.innerHTML += "[SCAN] Analyzing system...\n";
  setTimeout(() => c.innerHTML += "[SCAN] 1 suspicious pattern found\n", 700);
  c.scrollTop = c.scrollHeight;
}

function quarantine() {
  const c = document.getElementById("virusConsole");
  c.innerHTML += "[DEFENSE] Threat isolated successfully\n";
  c.scrollTop = c.scrollHeight;
}

/* SCRIPTING SIM */
let lesson = 1;
function nextLesson() {
  const c = document.getElementById("scriptConsole");
  lesson++;
  c.innerHTML += `[LESSON ${lesson}] New concept unlocked (simulation)\n`;
  c.scrollTop = c.scrollHeight;
}
