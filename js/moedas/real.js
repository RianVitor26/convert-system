const realConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        var value = (input_left * 0.22)
        input_right.value = value
        break;
      case "2":
        // real para dolar]
        input_right.value = "Mesmo tipo"      
        break;
      case "3":
         // real para euro
         var value = (input_left * 0.20)
         input_right.value = value      
        break;
      case "4":
          // real apra bitcoin
          var value = (input_left * 0.0000051)
          input_right.value = value
          break;
    }
  }