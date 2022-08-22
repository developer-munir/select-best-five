const liContainer = document.getElementById("li-container");
const arr = [];
const buttons = document.getElementsByClassName("selected-btn");
for (const button of buttons) {
  button.addEventListener("click", function (e) {
    e.stopImmediatePropagation;
    const playerNames = e.target.parentNode.children[0];
    const playerName = playerNames.innerText;
    arr.push(playerName);
    if (arr.length <= 5) {
      const li = document.createElement("li");
      li.innerText = playerName;
      liContainer.appendChild(li);
      button.setAttribute("disabled", true);
      button.style.backgroundColor = "#CAD5E2";
    } else {
      alert("do not add more than 5 players at a time");
    }
  });
}
