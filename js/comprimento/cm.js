const cmConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");
  
  switch (index) {
    case "1":
      //cm pra m
      var value = input_left / 100
      input_right.value = value;
      break;
    case "2":
      //cm pra km
      var value = input_left / 100000
      input_right.value = value;
      break;
    case "3":
      input_right.value = "Mesmo Valor";
      break;
  }
}