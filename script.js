let balance = 50000;
let transactions = [];
const correctPin = 1234;

function login() {
    const pin = Number(document.getElementById("pinInput").value.trim());
    console.log("Entered PIN:", pin, "Type:", typeof pin);
    const message = document.getElementById("LoginMessage");
    if (pin !== correctPin) {
        alert("Incorrect PIN");
    } else {
        document.getElementById("LoginScreen").classList.add("hidden");
        document.getElementById("menuScreen").classList.remove("hidden");
        message.textContent = "";
    }
}

function showBalance() {
    document.getElementById("output").innerHTML =
        `<strong>Your current balance is:</strong><br>KSh ${balance.toLocaleString()}`;
}

function withdraw() {
    const amount = Number(prompt("Enter amount to withdraw:"));
    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }
    if (amount > balance) {
        alert("Insufficient funds!");
        return;
    }
    balance -= amount;
    transactions.push(`Withdraw KSh ${amount.toLocaleString()}`);
    document.getElementById("output").innerHTML =
        `Withdrawal successful!<br>KSh ${amount.toLocaleString()} withdrawn.<br>Remaining balance: KSh ${balance.toLocaleString()}`;
}

function deposit() {
    const amount = Number(prompt("Enter amount to deposit:"));
    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }
    balance += amount;
    transactions.push(`Deposited KSh ${amount.toLocaleString()}`);
    document.getElementById("output").innerHTML =
        `Deposit successful!<br>KSh ${amount.toLocaleString()} deposited.<br>Remaining balance: KSh ${balance.toLocaleString()}`;
}

function transfer() {
    const account = prompt("Enter recipient account number:");
    if (!account) return;
    const amount = Number(prompt("Enter amount to transfer:"));
    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }
    if (amount > balance) {
        alert("Insufficient funds!");
        return;
    }
    balance -= amount;
    transactions.push(`Transferred KSh ${amount.toLocaleString()} to account ${account}`);
    document.getElementById("output").innerHTML =
        `Transfer successful!<br>KSh ${amount.toLocaleString()} transferred to account ${account}.<br>Remaining balance: KSh ${balance.toLocaleString()}`;
}
function showHistory() {
    if (transactions.length === 0) {
        document.getElementById("output").innerHTML = "No transaction yet.";
        return;
    }
    let history = "<strong>Transaction History</strong><br><br>";
    transactions.forEach((transactions, index)=>{
        history += '${index + 1}. ${transaction}<br><br>';
    });
    document.getElementById("output").innerHTML = history;   
}
function logout(){
    document.getElementById("menuScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("pin").value = "";
    document.getElementById("output").innerHTML = "";
}
