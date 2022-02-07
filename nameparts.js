let str = "Albus Percival Wulfric Brian Dumbledore";
document.getElementById("before").textContent = str;
document.getElementById("firstname").textContent = str.substring(0, str.indexOf(" "));
document.getElementById("middlename").textContent = str.substring(
  str.indexOf(" ") + 1,
  str.lastIndexOf(" ")
);
document.getElementById("lastname").textContent = str.substring(
  str.lastIndexOf(" ") + 1,
  str.length
);
