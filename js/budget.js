// calculate per player-budget
document.getElementById("calculate-btn").addEventListener("click", function () {
  const playerBudgetField = getPlayerBudget("player-budget-field");
  const totalPlayerCost = playerBudgetField * liContainer.childElementCount;
  setTotal("player-expenses", totalPlayerCost);
  // validation
  if (playerBudgetField < 0 || isNaN(playerBudgetField)) {
    alert("please enter a valid number");
    setTotal("player-expenses", "00");
  }
});

// calculation total budget
document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const playerBudgetField = getPlayerBudget("player-budget-field");
    const managerBudgetField = getPlayerBudget("manager-budget");
    const coachBudgetField = getPlayerBudget("coach-budget");
    const totalPlayerCost = playerBudgetField * liContainer.childElementCount;
    const totalBudget = managerBudgetField + coachBudgetField + totalPlayerCost;
    setTotal("all-budget", totalBudget);
    // validation
    if (
      managerBudgetField < 0 ||
      isNaN(managerBudgetField) ||
      coachBudgetField < 0 ||
      isNaN(coachBudgetField)
    ) {
      alert("please enter a valid number");
      setTotal("all-budget", "00");
    }
  });
