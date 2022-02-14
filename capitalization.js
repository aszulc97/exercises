function capitalize(string) {
  document.getElementById("before").textContent = string;
  string = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  document.getElementById("after").textContent = string;
  console.log(string);
}

capitalize("PEtER");
capitalize("PEter");
