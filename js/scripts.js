var cups = parseFloat(prompt("how many cups to ounces"));

var ouncesConversion = function(cups) {
 //(1/8)cup = oz
 var ounces = cups * 8;
 return ounces;
}

alert(ouncesConversion(cups));
