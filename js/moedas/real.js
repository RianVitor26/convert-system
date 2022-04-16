const realConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        input_right.value = "Mesmo tipo"
        break;
      case "2":
        // dolar para real
        var value = (input_left * 4.50)
        input_right.value = value      
        break;
      case "3":
         // 1 euro para real
         var value = (input_left * 5.08)
         input_right.value = value      
        break;
      case "4":
          // 1 bitcoin para real ( pode mudar)
          var value = (input_left * 188892.29)
          input_right.value = value
          break;
    }
  }