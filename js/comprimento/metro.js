const metroConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right"); // resultado final
  
  switch (index) {
    case "1":
      input_right.value = "Mesmo Valor";
      break;
    case "2":
      //m pra km
      var value = input_left / 1000
      input_right.value = value     
      break;
    case "3":
      //m pra cm
      var value = input_left * 100
      input_right.value = value     
  }
}