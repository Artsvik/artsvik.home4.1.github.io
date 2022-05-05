let rows = 5;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}



for (let a = 1; a <= rows; a++) {
    for (let c = 1; c <= (rows - a); c++) {
        document.write("&nbsp;")
    }
    for (let b = 1; b <= a; b++) {
        document.write("*")
    }
    document.write("<br/>")
}


for (let x = rows; x >= 1; x--) {
    for (let y = rows; y >= (rows - x); y--) {
        document.write("&nbsp;")
    }
    for (let z = x; z >= 1; z--) {
        document.write("*")
    }
    document.write("<br/>")
}


let div_elem = document.querySelector("circle")
function getCelsius(celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let message = `${cTemp}\xB0C ${cToFahr} \xB0F.`;
    console.log(message);
    div_elem.classList.add("circle")
}

function getFahreinheit(fahrenheit) {
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let message = `${fTemp}\xB0F ${fToCel}\xB0C.`;
    console.log(message);
    div_elem.classList.add("circle")
}
getCelsius();
getFahreinheit();

