    // calculate fahrenheit to celsius
    function calculateFahrenheitToCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    // calculate celsius to fahrenheit
    function calculateCelsiusToFahrenheit(celsius) {
      // document.getElementById("formula-celsius").innerHTML = `(${celsius}°C * 9/5) + 32 = ${fahrenheit.toFixed(
      //   2
      // )}F`;
      return (celsius * 9) / 5 + 32;
    }

    // get ids
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const exchange = document.getElementById("exchange");

    // add event listener to fahrenheitInput
    fahrenheitInput.addEventListener("input", function () {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      celsiusInput.value = calculateFahrenheitToCelsius(fahrenheitValue);

      // display formula in footer
      formula(fahrenheitValue);
    });

    // add event listener to celsiusInput
    celsiusInput.addEventListener("input", function () {
      const celsiusValue = parseFloat(celsiusInput.value);
      fahrenheitInput.value = calculateCelsiusToFahrenheit(celsiusValue);

      // display formula in footer
      formula(fahrenheitInput.value);
    });

    function formula(value) {
      const formula = document.getElementById("formula");
      if (isNaN(value)) {
        formula.innerHTML = `<span class="px-2 py-1 bg-red-500 text-white rounded-lg">Formula: (°F - 32) * 5/9 = °C</span>`;
      } else {
        formula.innerHTML = `<span class="px-2 py-1 bg-green-500 text-white rounded-lg">Formula: (${value}°F - 32) * 5/9 = ${calculateFahrenheitToCelsius(
          value
        ).toFixed(2)}°C</span>`;
      }
    }

    const checkAuthor = document.getElementById("checkAuthor");
    if (checkAuthor.children[0].children[0].textContent === "@sauravhathi") {
    } else {
      window.location.href = "https://github.com/sauravhathi";
    }

    // if exchange is clicked then swap the values of fahrenheit and celsius
    if (exchange) {
      exchange.addEventListener("click", function () {
        let fahrenheitValue = fahrenheitInput.value;
        let celsiusValue = celsiusInput.value;
        if (fahrenheitValue == "" && celsiusValue == "") {
          alert("Please enter a value");
        } else {
          // add class to exchange icon
          exchange.classList.toggle("exchange");
          let fahrenheitValue = fahrenhei<tInput.value;
          let celsiusValue = celsiusInput.value;
          let temp = fahrenheitValue;
          celsiusValue = fahrenheitValue;
          fahrenheitInput.value = calculateCelsiusToFahrenheit(celsiusValue);
          celsiusInput.value = temp;
        }
      });
    }
