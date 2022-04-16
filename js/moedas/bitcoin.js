const bitcoinConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        input_right.value = "Mesmo tipo"
        break;
      case "2":
        // dolar para bitcoin
        var value = (input_left * 0.000025)
        input_right.value = value      
        break;
      case "3":
         // euro para bitcoin
         var value = (input_left * 0.000027)
         input_right.value = value      
        break;
      case "4":
          //1 real para bitcoin
          var value = (input_left * 0.0000053)
          input_right.value = value
          break;
    }
  }