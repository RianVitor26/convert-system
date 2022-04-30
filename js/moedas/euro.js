const euroConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        // euro para dolar
        var value = (input_left * 1.08)
        input_right.value = value 
        break;
      case "2":
        // euro para real 
        var value = (input_left * 5.01)
        input_right.value = value      
        break;
      case "3":
        input_right.value = "Mesmo tipo"     
        break;
      case "4":
          // euro para bitcoin ( pode mudar)
          var value = (input_left * 0.000026)
          input_right.value = value
          break;
    }
  }