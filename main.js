// JS for IPO Calculator
//
// Temperature Unit Conversion Program

// eventListener
document.getElementById('button').addEventListener('click', calculate);

// Define element references
let inputJs = document.getElementById('input');
let selectUnitJs = document.getElementById('selectUnit');
let outputJs = document.getElementById('output');

// Variables
let convertedValue = 0;
let outputUnit = 'F';

// Calculate function
function calculate() {
  //
  // CELSIUS to FAHRENHEIT Conversion
  //
  if (selectUnitJs.value === 'celsius') {
    convertedValue = inputJs.value * (9 / 5) + 32;
    outputUnit = 'F';

    // FAHRENHEIT to CELSIUS Conversion
    //
  } else {
    convertedValue = (inputJs.value - 32) * (5 / 9);
    outputUnit = 'C';
  }

  // Output
  //
  outputJs.innerHTML = `${convertedValue} ${outputUnit}`;
} // Function end
