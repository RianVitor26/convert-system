const kggramasConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right"); // resultado final
  
  switch (index) {
    case "1":
      var value = 1 // logica aqui
      input_right.value = value;
      break;
    case "2":
      input_right.value = "Mesmo Valor";
      break;
    case "3":
      var value = 1 // logica aqui
      input_right.value = value;
      break;
    case "4":
        var value = 1 // logica aqui
        input_right.value = value;
        break;
  }
}