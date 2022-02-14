// let str = "Albus Percival Wulfric Brian Dumbledore";
// str = "Agata Szulc";

// function getNameParts(fullname) {
//   let firstname = fullname.substring(0, fullname.indexOf(" "));
//   let middlename = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
//   let lastname = fullname.substring(fullname.lastIndexOf(" ") + 1, fullname.length);
//   console.log({ firstname, middlename, lastname });
// }

// getNameParts(str);

function fullName(lastname, firstname, middlename) {
  let fullnameString;
  if (middlename) {
    fullnameString = firstname + " " + middlename + " " + lastname;
  } else {
    fullnameString = firstname + " " + lastname;
  }
  console.log(fullnameString);
}

fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Potter", "Harry", "James", "Pottypotpot");
