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
      // 1 dolar para real : 4,50 (pode mudar)
      var value = (input_left * 4.50)
      input_right.value = value      
      break;
    case "3":
       // 1 dolar para euro : 1.08 (pode mudar)
       var value = (input_left * 0.92)
       input_right.value = value      
      break;
    case "4":
        // 1 dolar para bitcoin ( pode mudar)
        var value = (input_left * 0.000024)
        input_right.value = value
        break;
  }
}
