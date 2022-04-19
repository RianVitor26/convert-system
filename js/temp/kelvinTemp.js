const kelvinConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");
  
  switch (index) {
    case "1":
      var value = input_left - 273.15
      input_right.value = value
      break;
    case "2":
      var value = (input_left - 273.15) * 9/5 + 32
      input_right.value = value
      break;
    case "3":
      input_right.value = "Mesmo tipo"
      break;
  }
}