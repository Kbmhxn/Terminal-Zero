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
  }, 2000);
};

function openModule(id) {
  menuScreen.classList.add("hidden");
  moduleScreen.classList.remove("hidden");

  document.querySelectorAll(".module").forEach(m =>
    m.classList.add("hidden")
  );

  document.getElementById(id).classList.remove("hidden");
}

function back() {
  moduleScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
}

function fakeRun() {
  const c = document.getElementById("execConsole");
  c.innerHTML += "Simulating execution...\n";
}

function fakeScan() {
  const c = document.getElementById("virusConsole");
  c.innerHTML += "Fake threat detected and logged\n";
}
