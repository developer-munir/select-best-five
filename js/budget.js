// calculate per player-budget
document.getElementById("calculate-btn").addEventListener("click", function () {
  const playerBudgetField = getPlayerBudget("player-budget-field");
  const totalPlayerCost = playerBudgetField * 5;
  setTotal("player-expenses", totalPlayerCost);
});
// calculation total budget
document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const playerBudgetField = getPlayerBudget("player-budget-field");
    const managerBudgetField = getPlayerBudget("manager-budget");
    const coachBudgetField = getPlayerBudget("coach-budget");
    const totalPlayerCost = playerBudgetField * 5;
    const totalBudget = managerBudgetField + coachBudgetField + totalPlayerCost;
    setTotal("all-budget", totalBudget);
  });
