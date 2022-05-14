const kilogramasConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
  
    switch (index) {
        case "1":
            var value = (input_left * 1000)
            input_right.value = value 
        break;
        
        case "2":
            input_right.value = "Mesmo Tipo"  
        break;
        case "3":
            var value = (input_left / 1000)
            input_right.value = value 
        break;
    }
  }