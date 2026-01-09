const output = document.getElementById("output");
const input = document.getElementById("input");
const boot = document.getElementById("boot");
const desktop = document.getElementById("desktop");

let mode = null;
let unlocked = {
  scan: false,
  files: false
};

const fakeFS = {
  home: {
    "welcome.txt": "Welcome to Terminal Zero.",
    "hint.txt": "Sometimes 'scan' reveals more than you expect."
  }
};

setTimeout(() => {
  boot.style.display = "none";
  desktop.classList.remove("hidden");
  showIntro();
}, 3000);

function print(text) {
  output.innerHTML += `<div>${text}</div>`;
  output.scrollTop = output.scrollHeight;
}

function showIntro() {
  print("Welcome to Terminal Zero.");
  print("This is a fictional OS simulation game.");
  print("");
  print("Choose a mode:");
  print("1) tutorial");
  print("2) experienced");
}

input.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;

  const cmd = input.value.trim().toLowerCase();
  input.value = "";
  print(`> ${cmd}`);

  if (!mode) return chooseMode(cmd);
  handleCommand(cmd);
});

function chooseMode(cmd) {
  if (cmd === "tutorial" || cmd === "1") {
    mode = "tutorial";
    print("Tutorial mode enabled.");
    print("Type: help");
  } else if (cmd === "experienced" || cmd === "2") {
    mode = "experienced";
    unlocked.scan = true;
    unlocked.files = true;
    print("Experienced mode enabled.");
    print("All core commands unlocked.");
  } else {
    print("Type 'tutorial' or 'experienced'.");
  }
}

function handleCommand(cmd) {
  switch (cmd) {
    case "help":
      showHelp();
      break;

    case "scan":
      if (!unlocked.scan) {
        print("Command locked. Complete tutorial first.");
        break;
      }
      print("Scanning system...");
      print("Node detected: home/");
      unlocked.files = true;
      break;

    case "ls":
      if (!unlocked.files) {
        print("No directory access yet.");
        break;
      }
      Object.keys(fakeFS.home).forEach(f => print(f));
      break;

    case "open welcome.txt":
      print(fakeFS.home["welcome.txt"]);
      break;

    case "open hint.txt":
      print(fakeFS.home["hint.txt"]);
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      print("Unknown command. Type 'help'.");
  }
}

function showHelp() {
  print("Available commands:");
  print("- help");
  if (unlocked.scan) print("- scan");
  if (unlocked.files) {
    print("- ls");
    print("- open welcome.txt");
    print("- open hint.txt");
  }
  print("- clear");

  if (mode === "tutorial" && !unlocked.scan) {
    print("");
    print("Tutorial hint:");
    print("Try typing: scan");
    unlocked.scan = true;
  }
}
