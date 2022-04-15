// Listas
const temperatura = [ "Celsius", "Fahrenheit", "kelvin"]
const dados = [ "Bit", "Byte", "Terabyte"]

// Estruturação
const getType = () => {
  var e = document.getElementById("convert");
  var value = e.options[e.selectedIndex].value;
  setValues(value)
}

const setValues = (index) => {
  switch (index) {
    case "1":
      setSelect(temperatura)
      break;
    case "2":
      setSelect(dados)
      break;
    default:
      break;
  }
}

const setSelect = (listOptions) => {
  preecherSelect("select-left", listOptions)
  preecherSelect("select-right", listOptions)
}

const preecherSelect= (id, list) => {
  aux = 0;
  var TypeSelect = document.getElementById(id);
  list.forEach((sub_types) => {
    option = new Option(sub_types, aux+1);
    TypeSelect.options[aux] = option;
    aux++
  });
}

// Conversões
const convert = () => {
  var e = document.getElementById("convert");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      convertTemperatura()
      break;
    case "2":
      console.log("Dados")
      break;
    default:
      break;
  }
}

// Convertendo temperatura
const convertTemperatura = () => {
  var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      celsiusConvert()
      break;
    case "2":
      fahrConvert()
      break;
    case "3":
      kelvinConvert()
      break;
  }
}

const celsiusConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  
  var input_left = document.getElementById("input-left").value;
  var input_right = document.getElementById("input-right");

  switch (index) {
    case "1":
      input_right.value = "Mesmo tipo"
      break;
    case "2":
      // (C × 9/5) + 32 
      var value = (input_left * 9/5) + 32
      input_right.value = value      
      break;
    case "3":
       // C + 273,15 
       var value = input_left * 1 + 273.15
       input_right.value = value      
      break;
  }
}

const fahrConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      console.log("Fahrenheit x celsius")
      // Logica para converter para Celsius
      break;
    case "2":
      console.log("Fahrenheit x Fahrenheit")
      break;
    case "3":
      console.log("Fahrenheit x kelvin")
       // Logica para converter para kelvin
      break;
  }
}

const kelvinConvert = () => {
  var e = document.getElementById("select-right");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      console.log("kelvin x celsius")
      // Logica para converter para Celsius
      break;
    case "2":
      console.log("kelvin x Fahrenheit")
      // Logica para converter para Fahrenheit
      break;
    case "3":
      console.log("kelvin x kelvin")
      break;
  }
}