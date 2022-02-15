let str = "Albus PerciVAl WULFRIC Brian DumbledoRE";
//str = "Agata Szulc";

function getNameParts(fullname) {
  let firstname = capitalize(fullname.substring(0, fullname.indexOf(" ")));
  let middlename = capitalize(fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" ")));
  let middlenameArray = middlename.split(" ");
  for (let i = 0; i < middlenameArray.length; i++) {
    middlenameArray[i] = capitalize(middlenameArray[i]);
  }
  middlename = middlenameArray.join(" ");
  let lastname = capitalize(fullname.substring(fullname.lastIndexOf(" ") + 1, fullname.length));
  return { firstname, middlename, lastname };
}

let answer = getNameParts(str);
console.log(answer);
// function fullName(lastname, firstname, middlename) {
//   let fullnameString;
//   if (middlename) {
//     fullnameString = firstname + " " + middlename + " " + lastname;
//   } else {
//     fullnameString = firstname + " " + lastname;
//   }
//   return fullnameString;
// }

//let answer = fullName("Potter", "Harry", "James", "Pottypotpot");
// let answer = fullName("Szulc", "Agata");
// console.log(answer);
// fullName("Potter", "Harry");
// fullName("Potter", "Harry", "James", "Pottypotpot");

function capitalize(string) {
  string = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  return string;
}

// function capitalize(dataString) {
//   let charArray = dataString.toLowerCase().split("");
//   charArray[0] = charArray[0].charAt(0).toUpperCase();

//   for (let i = 0; i < charArray.length + 1; i++) {
//     if (charArray[i] === " " || charArray[i] === "-" || charArray[i] === '"') {
//       charArray[i + 1] = charArray[i + 1].charAt(0).toUpperCase();
//     }
//   }
//   console.log(charArray.join(""));
//   return charArray.join("");
// }
