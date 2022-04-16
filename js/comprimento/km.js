const kmConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right"); // resultado final
  
  switch (index) {
    case "1":
      //km pra m
      var value = input_left * 1000
      input_right.value = value;
      break;
    case "2":
      input_right.value = "Mesmo Valor";
      break;
    case "3":
      //km pra cm
      var value = input_left * 100000
      input_right.value = value;
      break;
  }
}