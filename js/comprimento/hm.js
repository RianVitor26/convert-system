const hmConvert = () => {
    var e = document.getElementById("select-right");
    var index = e.options[e.selectedIndex].value;
    
    var input_left = document.getElementById("input-left").value;
    var input_right = document.getElementById("input-right");
    
    switch (index) {
      case "1":
        //M
        var value = input_left * 100
        input_right.value = value;
        break;
      case "2":
        //KM
        var value = input_left / 10
        input_right.value = value;
        break;
      case "3":
        //CM
        var value = input_left * 10000
        input_right.value = value;
        break;
      case "4":
        //DAM
        var value = input_left * 10
        input_right.value = value;
        break;
      case "5":
        //HM
        var value = "Mesmo valor"
        input_right.value = value;
        break;
      case "6":
        //MM
        var value = input_left * 100000
        input_right.value = value;
        break;
      case "7":
        //DM
        var value = input_left * 1000
        input_right.value = value;
        break;
    }
  }