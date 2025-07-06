const score = { value: 0 };
const time = { left: 5 };

const btn = document.getElementById("btn");
const out = document.getElementById("out");

btn.onclick = function () {
  score.value = score.value + 1;
  out.innerText = score.value;
};

const game = setInterval(function () {
  time.left = time.left - 1;
  if (time.left == 0) {
    clearInterval(game);
    btn.disabled = true;
    alert("Очки: " + score.value);
  }
}, 1000);