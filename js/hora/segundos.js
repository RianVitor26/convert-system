const segundosConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        input_right.value = "Mesmo tipo"      
        break;
      case "2":
        // segundos para minutos
        var value = (input_left / 60).toFixed(6)
        input_right.value = value    
        break;
      case "3":
        // segundos para hora
        var value = (input_left / 3600).toFixed(6)
        input_right.value = value      
        break;
      case "4":
        // segundos para dias
        var value = (input_left / 86400).toFixed(6)
        input_right.value = value
        break;
    }
  }