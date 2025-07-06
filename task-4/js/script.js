function goTimer() {
  const input = document.getElementById("sec");
  const sec = Number(input.value);

  if (sec > 0) {
    const timer = setTimeout(function () {
      alert("Час вийшов");
    }, sec * 1000);
  }
}
