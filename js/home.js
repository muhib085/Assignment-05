// noakhali donate button

document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const donateAmount = getInputNumber("input-noakhali");

    if (isNaN(donateAmount) || donateAmount < 0) {
      alert("Invalid Donation Amount.");
    } else {
      alert("Congrates!!!.");
    }
    const totalDonateAmount = getTotalDonateNumber("noakhali-balance");
    const subTotal = totalDonateAmount + donateAmount;
    document.getElementById("noakhali-balance").innerText = subTotal;

    const balance = getTotalDonateNumber("total-balance");
    const newBalance = balance - donateAmount;
    document.getElementById("total-balance").innerText = newBalance;

    document.getElementById("input-noakhali").value = "";

    // add to history section
    const d = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "p-8",
      "shadow-lg",
      "border-2",
      "border-inherit",
      "rounded-lg",
      "m-3"
    );
    div.innerHTML = `
    <h4 class = "font-bold text-xl">${donateAmount} Taka is Donated for flood at Noakhali, Bangladesh.</h4>
    <p>${d}</p>
    `;
    document.getElementById("history-list").appendChild(div);
  });

//   feni donate dutton

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const donateAmount = getInputNumber("input-feni");

    if (isNaN(donateAmount) || donateAmount < 0) {
      alert("Invalid Donation Amount.");
    } else {
      alert("Congrates!!!.");
    }
    const totalDonateAmount = getTotalDonateNumber("feni-balance");
    const subTotal = totalDonateAmount + donateAmount;
    document.getElementById("feni-balance").innerText = subTotal;

    const balance = getTotalDonateNumber("total-balance");
    const newBalance = balance - donateAmount;
    document.getElementById("total-balance").innerText = newBalance;

    document.getElementById("input-feni").value = "";

    // add to history section

    const d = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "p-8",
      "shadow-lg",
      "border-2",
      "border-inherit",
      "rounded-lg",
      "m-3"
    );
    div.innerHTML = `
    <h4 class = "font-bold text-xl">${donateAmount} Taka is Donated for flood at Feni, Bangladesh.</h4>
    <p>${d}</p>
    `;
    document.getElementById("history-list").appendChild(div);
  });

//   quota donate dutton

document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const donateAmount = getInputNumber("input-quota");

    if (isNaN(donateAmount) || donateAmount < 0) {
      alert("Invalid Donation Amount.");
    } else {
      alert("Congrates!!!.");
    }
    const totalDonateAmount = getTotalDonateNumber("quota-balance");
    const subTotal = totalDonateAmount + donateAmount;
    document.getElementById("quota-balance").innerText = subTotal;

    const balance = getTotalDonateNumber("total-balance");
    const newBalance = balance - donateAmount;
    document.getElementById("total-balance").innerText = newBalance;

    document.getElementById("input-quota").value = "";

    // add to history section

    const d = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "p-8",
      "shadow-lg",
      "border-2",
      "border-inherit",
      "rounded-lg",
      "m-3"
    );
    div.innerHTML = `
    <h4 class = "font-bold text-xl">${donateAmount} Taka Aid for Injured in the Quota Movement, Bangladesh.</h4>
    <p>${d}</p>
    `;
    document.getElementById("history-list").appendChild(div);
  });

//   blog button
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
