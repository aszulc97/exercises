randomBackground();

function randomBackground() {
  document.body.style.backgroundColor = rgbToCSS(randomColor());
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

function rgbToCSS(rgb) {
  let cssString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  console.log(cssString);
  return cssString;
}
