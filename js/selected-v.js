// 
const liContainer = document.getElementById("li-container");




const buttons = document.getElementsByClassName("selected-btn");
for (const button of buttons) {
  button.addEventListener("click", function (e) {
    const playerNames = e.target.parentNode.children[0];
    const playerName = playerNames.innerText;
    const li = document.createElement('li');
    li.innerText = playerName;
    liContainer.appendChild(li);
    button.setAttribute('disabled',true);
    console.log(playerName);

  });
}
