const minutosConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        // minutos para segundos
        var value = (input_left * 60)
        input_right.value = value    
        break;
      case "2":
        input_right.value = "Mesmo tipo"      
        break;
      case "3":
        // minutos para hora
        var value = (input_left / 60).toFixed(6)
        input_right.value = value      
        break;
      case "4":
        // minutos para dias
        var value = (input_left / 1440).toFixed(6)
        input_right.value = value
        break;
    }
  }