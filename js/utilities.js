// get input donate number by id
function getInputNumber(id) {
  const input = document.getElementById(id).value;
  const inputNumber = parseFloat(input);
  return inputNumber;
}

// get total donate number by id
function getTotalDonateNumber(id) {
  const totalDonate = document.getElementById(id).innerText;
  const totalDonateNumber = parseFloat(totalDonate);
  return totalDonateNumber;
}

function showButton(id) {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  //   show section
  document.getElementById(id).classList.remove("hidden");
}
