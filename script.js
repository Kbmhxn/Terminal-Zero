const output = document.getElementById("output");
const input = document.getElementById("input");
const boot = document.getElementById("boot");
const desktop = document.getElementById("desktop");
const windowEl = document.getElementById("window");
const header = document.getElementById("header");

/* Game state */
let state = JSON.parse(localStorage.getItem("tz_state")) || {
  mode: null,
  unlocked: {
    scan: false,
    files: false
  }
};

/* Fake file system */
const fs = {
  home: {
    "welcome.txt": "Welcome to Terminal Zero.",
    "note.txt": "This system is a simulation only."
  }
};

/* Boot */
setTimeout(() => {
  boot.style.display = "none";
  desktop.classList.remove("hidden");
  intro();
}, 3000);

/* Print helper */
function print(text) {
  output.innerHTML += `<div>${text}</div>`;
  output.scrollTop = output.scrollHeight;
  save();
}

/* Intro */
function intro() {
  if (state.mode) {
    print("System restored.");
    print("Type 'help'.");
    return;
  }

  print("Terminal Zero initialized.");
  print("Choose mode:");
  print("1) tutorial");
  print("2) experienced");
}

/* Input handler */
input.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const cmd = input.value.trim().toLowerCase();
  input.value = "";
  print("> " + cmd);

  if (!state.mode) return chooseMode(cmd);
  handle(cmd);
});

/* Mode selection */
function chooseMode(cmd) {
  if (cmd === "tutorial" || cmd === "1") {
    state.mode = "tutorial";
    print("Tutorial mode enabled.");
    print("Type 'help'.");
  } else if (cmd === "experienced" || cmd === "2") {
    state.mode = "experienced";
    state.unlocked.scan = true;
    state.unlocked.files = true;
    print("Experienced mode enabled.");
  } else {
    print("Type 'tutorial' or 'experienced'.");
  }
}

/* Commands */
function handle(cmd) {
  switch (cmd) {
    case "help":
      print("Commands:");
      print("- help");
      if (state.unlocked.scan) print("- scan");
      if (state.unlocked.files) {
        print("- ls");
        print("- open welcome.txt");
        print("- open note.txt");
      }
      print("- clear");

      if (state.mode === "tutorial" && !state.unlocked.scan) {
        print("Tutorial hint: try 'scan'");
        state.unlocked.scan = true;
      }
      break;

    case "scan":
      if (!state.unlocked.scan) return print("Command locked.");
      print("Scanning simulation...");
      print("Directory found: home/");
      state.unlocked.files = true;
      break;

    case "ls":
      if (!state.unlocked.files) return print("Access denied.");
      Object.keys(fs.home).forEach(f => print(f));
      break;

    case "open welcome.txt":
      print(fs.home["welcome.txt"]);
      break;

    case "open note.txt":
      print(fs.home["note.txt"]);
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      print("Unknown command.");
  }
}

/* Save progress */
function save() {
  localStorage.setItem("tz_state", JSON.stringify(state));
}

/* Draggable window */
let dragging = false, ox = 0, oy = 0;

header.addEventListener("mousedown", e => {
  dragging = true;
  ox = e.clientX - windowEl.offsetLeft;
  oy = e.clientY - windowEl.offsetTop;
});

document.addEventListener("mouseup", () => dragging = false);

document.addEventListener("mousemove", e => {
  if (!dragging) return;
  windowEl.style.left = e.clientX - ox + "px";
  windowEl.style.top = e.clientY - oy + "px";
});
