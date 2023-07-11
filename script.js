function convertToCelsius() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    
    if (!isNaN(fahrenheit)) {
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
    
    if (!isNaN(celsius)) {
      celsiusInput.value = celsius.toFixed(2);
    }
  }
  