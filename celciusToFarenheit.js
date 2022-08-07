//celsius to fahrenheit converter
function celsiusToFahrenheit(celsius) {
    let fahrenheit = ((9 * celsius) / 5) + 32;
    return fahrenheit;
}

//fahrenheit to celsius converter
function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((5*(fahrenheit - 32)) / 9);
    return celsius;
}

let celsiusValue = 10;
let fahrenheitValues = 50;
let fahrenheitValue = celsiusToFahrenheit(celsiusValue);
let celsiusValues = fahrenheitToCelsius(fahrenheitValues);

console.log("celsiusValue = ",celsiusValue, "\nfahrenheitValue = ", fahrenheitValue);
console.log("fahrenheitValues = ",fahrenheitValues, "\ncelsiusValues = ", celsiusValues);

