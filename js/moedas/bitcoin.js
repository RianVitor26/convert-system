const bitcoinConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        // bitcoin para dolar
        var value = (input_left * 42114.60)
        input_right.value = value
        break;
      case "2":
        // bitcoin para real
        var value = (input_left * 194683.16)
        input_right.value = value     
        break;
      case "3":
        // bitcin para euro
        var value = (input_left * 38858.72)
        input_right.value = value      
        break;
      case "4":
        input_right.value = "Mesmo tipo"    
        break;
    }
  }