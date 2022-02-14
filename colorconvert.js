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

let colorInHex = rgbToHex(300, 100, 220);
console.log(colorInHex);
