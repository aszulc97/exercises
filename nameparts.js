let str = "Albus Percival Wulfric Brian Dumbledore";
str = "Agata Szulc";

function getNameParts(fullname) {
  let firstname = fullname.substring(0, fullname.indexOf(" "));
  let middlename = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
  let lastname = fullname.substring(fullname.lastIndexOf(" ") + 1, fullname.length);
  console.log({ firstname, middlename, lastname });
}

getNameParts(str);
