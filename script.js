const consoleBox = document.getElementById("console");
const editor = document.getElementById("editor");
const statusText = document.querySelector(".status");

let attached = false;

function log(text) {
  consoleBox.innerHTML += text + "<br>";
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function attach() {
  if (attached) {
    log("[!] Already attached (simulation)");
    return;
  }

  log("[*] Attaching to fictional process...");
  setTimeout(() => {
    attached = true;
    statusText.textContent = "Status: Attached (Simulated)";
    statusText.style.color = "#55ff55";
    log("[✓] Successfully attached (simulation only)");
  }, 1000);
}

function execute() {
  if (!attached) {
    log("[!] Error: Not attached (simulation)");
    return;
  }

  if (!editor.value.trim()) {
    log("[!] No script provided");
    return;
  }

  log("[*] Executing script (simulation)...");
  setTimeout(() => {
    log("[✓] Script executed successfully");
    log("[i] No real actions were performed");
  }, 800);
}

function clearEditor() {
  editor.value = "";
  log("[i] Editor cleared");
}
