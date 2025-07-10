function CelsiusToFahrenheit() {
    let c = document.getElementById("celsius").value;
    let f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
    
}
function KgsToPounds() {
    let k = document.getElementById("kgs").value;
    let p = k * 2.2;
    document.getElementById("pounds").value = p;
    
}
function KmsToMiles() {
    let k = document.getElementById("km").value;
    let m = k * 0.621371;
    document.getElementById("miles").value = m;
}