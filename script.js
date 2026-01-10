const startScreen = document.getElementById("startScreen");
const loadingScreen = document.getElementById("loadingScreen");
const menuScreen = document.getElementById("menuScreen");
const moduleScreen = document.getElementById("moduleScreen");

document.getElementById("startBtn").addEventListener("click", () => {
  console.log("Start pressed");

  startScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    console.log("Loading finished");
    loadingScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");
  }, 2000);
});

function openModule(id) {
  console.log("Opening module:", id);

  menuScreen.classList.add("hidden");
  moduleScreen.classList.remove("hidden");

  document.querySelectorAll(".module").forEach(m =>
    m.classList.add("hidden")
  );

  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

function backToMenu() {
  moduleScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
}
