var principal = 0;
principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var amount = principal * years * rate / 100;
var year = new Date().getFullYear() + parseInt(years);
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}


function compute() {
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + amount + ",\<br\>in the year " + year + "\<br\>";
    }
}
