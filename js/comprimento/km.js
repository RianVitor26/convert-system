const metroConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");
  
  switch (index) {
    case "1":
      console.log("kilometro x metro")
      // Logica para converter para metro
      break;
    case "2":
      console.log("kilometro x kilometro")
      break;
    case "3":
      console.log("kilometro x centimetro")
      // Logica para converter para kilometro
      break;
  }
}