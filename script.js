const startScreen = document.getElementById("startScreen");
const playBtn = document.getElementById("playBtn");
const game = document.getElementById("game");
const output = document.getElementById("output");
const input = document.getElementById("input");

/* START BUTTON */
playBtn.onclick = () => {
  startScreen.classList.add("hidden");
  game.classList.remove("hidden");
  intro();
};

/* PRINT */
function print(text) {
  output.innerHTML += `<div>${text}</div>`;
  output.scrollTop = output.scrollHeight;
}

/* INTRO */
function intro() {
  print("Terminal Zero Simulation Loaded.");
  print("This is a fictional hacking-style game.");
  print("Nothing here is real.");
  print("");
  print("Type 'help' to see commands.");
}

/* COMMAND HANDLER */
input.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const cmd = input.value.trim().toLowerCase();
  input.value = "";
  print("> " + cmd);
  handle(cmd);
});

/* COMMANDS (ALL FAKE) */
function handle(cmd) {
  switch (cmd) {
    case "help":
      print("Available commands:");
      print("- help");
      print("- scan");
      print("- hack_sim");
      print("- virus_sim");
      print("- decrypt");
      print("- status");
      print("- clear");
      break;

    case "scan":
      print("Scanning virtual network...");
      print("Nodes found: node_alpha, node_beta");
      break;

    case "hack_sim":
      print("Running hacking simulation...");
      print("Access granted (simulation).");
      break;

    case "virus_sim":
      print("Simulating fake virus creation...");
      print("Result: harmless test payload (fictional).");
      break;

    case "decrypt":
      print("Decrypting sample data...");
      print("Decryption complete (simulated).");
      break;

    case "status":
      print("System status: STABLE");
      print("Simulation integrity: 100%");
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      print("Unknown command. Type 'help'.");
  }
}
