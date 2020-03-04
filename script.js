var r = prompt("Enter the radius of roller:");
var h = prompt("Enter the hight of roller");
var pi = Math.PI;

var result =  parseInt(Math.pow(r, 2)) * pi * parseInt(h); // kako da umesto r*r napisem re2?

document.write(result.toFixed(2));
