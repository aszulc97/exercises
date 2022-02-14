//RGB to HEX
function rgbToHex(r, g, b) {
  let hexVersion = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > 255) {
      console.log("value cannot be bigger than 255");
      break;
    }
    let division = Math.floor(arguments[i] / 16);
    let rest = arguments[i] % 16;
    hexVersion = hexVersion + numbersToLetters(division).toString() + numbersToLetters(rest).toString();
  }
  hexVersion = "#" + hexVersion;
  return hexVersion;
}

function numbersToLetters(number) {
  if (number > 9) {
    return String.fromCharCode(55 + number);
  } else return number;
}

let colorInHex = rgbToHex(200, 100, 220);
console.log(colorInHex);

//HEX to RGB
function hexToRgb(hexstring) {
  if (hexstring.charAt(0) === "#") {
    let red = lettersToNumbers(hexstring.charAt(1)) * 16 + lettersToNumbers(hexstring.charAt(2));
    let green = lettersToNumbers(hexstring.charAt(3)) * 16 + lettersToNumbers(hexstring.charAt(4));
    let blue = lettersToNumbers(hexstring.charAt(5)) * 16 + lettersToNumbers(hexstring.charAt(6));
    console.log(red, green, blue);
  } else {
    console.log("hex number should start with a #");
  }
}

function lettersToNumbers(character) {
  let number = character.toUpperCase().charCodeAt(0);
  if (number > 64) {
    return number - 55;
  } else return Number(character);
}

let colorInRgb = hexToRgb("#C864DC");
console.log(colorInRgb);

//CSS to RGB
function cssToRgb(cssString) {
  let red = parseInt(cssString.substring(cssString.indexOf("(") + 1, cssString.indexOf(",")));
  let green = parseInt(cssString.substring(cssString.indexOf(",") + 2, cssString.lastIndexOf(",")));
  let blue = parseInt(cssString.substring(cssString.lastIndexOf(",") + 2, cssString.indexOf(")")));
  console.log(red, green, blue);
}

cssToRgb("rgb(220, 100, 200)");
