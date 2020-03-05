var r = prompt("Enter the radius of roller:");
var h = prompt("Enter the hight of roller");
var pi = Math.PI;

var result =  parseInt(r*r) * pi * parseInt(h); 

document.write(result.toFixed(2));
