const box = document.getElementById("box");

box.style.left = "0px";

const move = setInterval(function () {
  const current = parseInt(box.style.left);
  const next = current + 10;
  box.style.left = next + "px";

  if (next >= 300) {
    clearInterval(move);
  }
}, 100);
