function compute()
{
    let p = document.getElementById("principle").value;
    let y = document.getElementById("years").value;
    let r = document.getElementById("rate").value;

    let interest = (p*y*r)/100;
    let ammount = parseInt(p)+parseFloat(interest);
    
    let atcualYear = new Date().getFullYear() + parseInt(y);

    let resultText = document.getElementById("result");
    resultText.innerHTML = "If you deposit $"+"<mark>" + p + "</mark>" + ",<br>" +
            "at an interest rate of " + "<mark>" + r + "%"+ "</mark>" + ".<br>" +
            "You will receive an amount of $" + "<mark>" + ammount + "</mark>" + ",<br>"+
            "in the year " + "<mark>" + atcualYear + "</mark>" + "<br>";
    
    
    
}
function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    
}
function validatePrincipal() {
    let p = document.getElementById("principle").value;
    
    if (p <= 0) {
        alert("Enter a positive number for Ammount.")
        document.getElementById("principle").focus();
    }
}        