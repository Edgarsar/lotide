const emoji = require("node-emoji");

//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.get("✅") + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(emoji.get("🛑") + "Assertion Failed: " + actual + " !== " + expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");

