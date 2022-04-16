const dolarConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");

  switch (index) {
    case "1":
      input_right.value = "Mesmo tipo"
      break;
    case "2":
      // 1 real para dolar : 4,50 (pode mudar)
      var value = (input_left * 0.21)
      input_right.value = value      
      break;
    case "3":
       // 1 euro para dolar : 1.08 (pode mudar)
       var value = (input_left * 1.08)
       input_right.value = value      
      break;
    case "4":
        // 1 bitcoin para dolar ( pode mudar)
        var value = (input_left * 40039.30)
        input_right.value = value
        break;
  }
}
