const euroConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        input_right.value = "Mesmo tipo"
        break;
      case "2":
        // dolar para euro
        var value = (input_left * 0.92)
        input_right.value = value      
        break;
      case "3":
         // real para euro
         var value = (input_left * 0.20)
         input_right.value = value      
        break;
      case "4":
          // 1 bitcoin para euro ( pode mudar)
          var value = (input_left * 37125.30)
          input_right.value = value
          break;
    }
  }