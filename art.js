let artworks = document.getElementsByClassName("artwork");
let id = 1;

//artworks.length + 1

for (let j = 1; j < 5; j++) {
  if (j === 1) {
    forLoop(100, 300, 20, "box", j);
  }
  if (j === 2) {
    forLoop(0, 90, 10, "box", j);
  }
  if (j === 3) {
    forLoop(0, 200, 10, "circle", j);
  }
  if (j === 4) {
    forLoop(-90, 90, 20, "box", j);
  }
}

function forLoop(start, end, step, classType, parent) {
  for (let i = start; i <= end; i += step) {
    (function (i) {
      setTimeout(() => {
        addArt(i, classType, parent);
      }, i * 10);
    })(i);
  }
}

function addArt(size, classType, parent) {
  let newEl = document.createElement("div");
  newEl.classList.add(classType);
  switch (parent) {
    case 1:
    case 3:
      newEl.style.height = size + "px";
      newEl.style.width = size + "px";
      break;
    case 2:
      newEl.style.transform = "rotate(" + size + "deg)";
      break;
    case 4:
      newEl.style.transform = `translate(${size}px,${size}px)`;
      break;
  }
  document.querySelector("#artwork" + parent).appendChild(newEl);
}
