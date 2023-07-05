function convertTemperature() {
    let celsius = parseFloat(document.getElementById('temperature_C').value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').innerHTML = celsius + "°C = " + fahrenheit + "°F";
}

document.getElementById('convertButton').addEventListener('click', convertTemperature);
