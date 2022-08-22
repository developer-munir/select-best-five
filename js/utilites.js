// get text field values
function getPlayerBudget(playerId) {
  const inputFieldString = document.getElementById(playerId);
  const inputFieldValue = parseInt(inputFieldString.value);
  return inputFieldValue;
}
// set totals
function setTotal(totalId, newTotal) {
  const previosTotal = document.getElementById(totalId);
  previosTotal.innerText = newTotal;
}