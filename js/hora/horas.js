const horasConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        // hora para segundos
        var value = (input_left * 3600)
        input_right.value = value    
        break;
      case "2":
        // hora para minutos
        var value = (input_left * 60)
        input_right.value = value    
        break;
      case "3":
        input_right.value = "Mesmo tipo"      
        break;
      case "4":
        // hora para dias
        var value = (input_left / 24).toFixed(6)
        input_right.value = value
        break;
    }
  }