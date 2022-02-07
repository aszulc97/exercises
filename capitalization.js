let str = "PEtER";
document.getElementById("before").textContent = str;
document.getElementById("after").textContent =
  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
