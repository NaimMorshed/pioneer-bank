document.getElementById("login-button").addEventListener('click', function(){
    document.getElementById("section-1").style.display = "none";
    document.getElementById("section-2").style.display = "block";
});
document.getElementById("deposit-button").addEventListener('click', function(){
    let depositAmount = parseFloat(document.getElementById("deposit-input").value);
    let previousDeposit = document.getElementById("previous-deposit");
    let x = parseFloat(previousDeposit.innerText);
    previousDeposit.innerHTML = depositAmount + x;
    let currentBalance = document.getElementById("current-balance");
    let y = parseFloat(currentBalance.innerText);
    currentBalance.innerHTML = y + depositAmount;
    document.getElementById("deposit-input").value = "";
});
document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawInput = parseFloat(document.getElementById('withdraw-input').value);
    const previousWithdraw = document.getElementById('previous-withdraw');
    const y = parseFloat(previousWithdraw.innerText);
    previousWithdraw.innerHTML = y + withdrawInput;
    const currentBalance = document.getElementById("current-balance");
    const z = parseFloat(currentBalance.innerText);
    currentBalance.innerHTML = z - withdrawInput;
    document.getElementById("withdraw-input").value = "";
});