const mililitrosConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
      case "1":
        input_right.value = "Mesmo Tipo"    
        break;
      case "2":
        // ml para L
        var value = (input_left / 1000)
        input_right.value = value    
        break;
    }
  }