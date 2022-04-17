const cmConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");
  
  switch (index) {
    case "1":
      var value = input_left / 100
      input_right.value = value;
      break;
    case "2":
      var value = input_left / 100000
      input_right.value = value;
      break;
    case "3":
      var value = "Mesmo Valor"
      input_right.value = value;
      break;
    case "4":
      var value = input_left / 10000
      input_right.value = value;
      break;
    case "5":
      var value = input_left / 1000
      input_right.value = value;
      break;
    case "6":
      var value = input_left * 10
      input_right.value = value;
      break;
    case "7":
      var value = input_left / 10
      input_right.value = value;
      break;
  }
}