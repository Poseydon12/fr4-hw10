const i = { value: 0 };
const timer = setInterval(function () {
  console.log("Привіт " + (i.value + 1));
  i.value = i.value + 1;
  if (i.value == 5) {
    clearInterval(timer);
    console.log("Готово");
  }
}, 1000);
