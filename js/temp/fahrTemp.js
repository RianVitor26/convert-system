const fahrConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
    
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");

  switch (index) {
    case "1":
      console.log("Fahrenheit x celsius")
      // Logica para converter para Celsius
      break;
    case "2":
      console.log("Fahrenheit x Fahrenheit")
      break;
    case "3":
      console.log("Fahrenheit x kelvin")
       // Logica para converter para kelvin
      break;
  }
}