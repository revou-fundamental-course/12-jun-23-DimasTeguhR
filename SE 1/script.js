function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  var outputFahrenheit = document.getElementById("outputFahrenheit");
  var explanationText = document.getElementById("explanationText");
  if (!isNaN(valNum)) {
    var fahrenheit = (valNum * 1.8) + 32;
    outputFahrenheit.innerHTML = fahrenheit.toFixed(2) + "°F";
    explanationText.innerHTML = "Untuk mengonversi " + valNum + "°C ke Fahrenheit:<br>" +
      "Langkah 1: Kalikan " + valNum + " dengan 1.8<br>" +
      "Langkah 2: Tambahkan hasil perkalian dengan 32<br>" +
      "Hasil: " + valNum + "°C = " + fahrenheit.toFixed(2) + "°F";
  } else {
    outputFahrenheit.innerHTML = "";
    explanationText.innerHTML = "";
  }
}
