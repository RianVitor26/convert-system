const metroConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right"); // resultado final
  
  switch (index) {
    case "1":
      // Logica para converter para metro
      var value = 1 // logica aqui
      input_right.value = value;
      break;
    case "2":
      input_right.value = "Mesmo Valor";
      break;
    case "3":
      // Logica para converter para kilometro
      var value = 1 // logica aqui
      input_right.value = value;
      break;
  }
}