const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    output.innerHTML += `<br>> ${command}`;
    input.value = "";

    if (command === "help") {
      output.innerHTML += "<br>Commands: help, clear";
    } else if (command === "clear") {
      output.innerHTML = "";
    } else {
      output.innerHTML += "<br>Unknown command.";
    }
  }
});
