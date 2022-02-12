let artworks = document.getElementsByClassName("artwork");
let i;

//artworks.length + 1

for (let j = 1; j < 10; j++) {
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
  //   if (j === 5) {
  //     i = 2;
  //     console.log("i", i);
  //     forLoop(1, 512, i, "circle", j);
  //   }
  if (j === 6) {
    forLoop(-20, 45, 5, "circle", j);
  }
  if (j === 7) {
    forLoop(0, 200, 10, "circle", j);
  }
  if (j === 8) {
    forLoop(50, 200, 10, "box", j);
  }
  if (j === 9) {
    forLoop(50, 200, 30, "box", j);
    forLoop(50, 200, 30, "circle", j);
  }
}

function forLoop(start, end, step, classType, parent) {
  for (i = start; i <= end; i += step) {
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
    case 9:
      newEl.style.height = size + "px";
      newEl.style.width = size + "px";
      break;
    case 2:
      newEl.style.transform = "rotate(" + size + "deg)";
      break;
    case 4:
      newEl.style.transform = `translate(${size}px,${size}px)`;
      break;
    case 5:
      console.log(size);
      newEl.style.height = size + "px";
      newEl.style.width = size + "px";
      break;
    case 6:
      let newX = size - 50;
      let newAngle = size * 4;
      newEl.style.transform = `translateX(${newX}px)`;
      newEl.style.transform = "rotate(" + newAngle + "deg)";
      break;
    case 7:
      let newY = size / -2;
      newEl.style.height = size + "px";
      newEl.style.width = size + "px";
      newEl.style.transform = `translate(${size}px,${newY}px)`;
      break;
    case 8:
      let newXX = size / 2;
      newEl.style.height = size + "px";
      newEl.style.width = size + "px";
      newEl.style.transform = `translate(${newXX}px)`;
      newEl.style.transform = "rotate(" + size + "deg)";
      break;
  }
  document.querySelector("#artwork" + parent).appendChild(newEl);
}
