const diasConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        // dia para segundos
        var value = (input_left * 86400)
        input_right.value = value    
        break;
      case "2":
        // dia para minutos
        var value = (input_left * 1440)
        input_right.value = value    
        break;
      case "3":
        var value = (input_left * 24)
        input_right.value = value    
        break;
      case "4":
        // hora para dias
        input_right.value = "Mesmo tipo"      
        break;
    }
  }