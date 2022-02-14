function rgbToHex(r, g, b) {
  let hexVersion = "";
  for (let i = 0; i < arguments.length; i++) {
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
