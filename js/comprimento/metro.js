const metroConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");
  
  switch (index) {
    case "1":
      console.log("metro x metro")
      break;
    case "2":
      console.log("metro x kilometro")
      // Logica para converter para kilometro
      break;
    case "3":
      console.log("metro x centimetro")
      // Logica para converter para kilometro
      break;
  }
}