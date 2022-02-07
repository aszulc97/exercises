let str = "PEtER";
document.getElementById("before").textContent = str;
document.getElementById("after").textContent =
  str.substring(0, 2).toLowerCase() + str.charAt(2).toUpperCase() + str.substring(3).toLowerCase();
