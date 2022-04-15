const kelvinConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");
  
  switch (index) {
    case "1":
      console.log("kelvin x celsius")
      // Logica para converter para Celsius
      break;
    case "2":
      console.log("kelvin x Fahrenheit")
      // Logica para converter para Fahrenheit
      break;
    case "3":
      console.log("kelvin x kelvin")
      break;
  }
}