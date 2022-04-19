// Listas
const temperatura = ["Celsius", "Fahrenheit", "kelvin"]
const comprimento = ["Metro", "Quilômetro", "Centímentro", "Decâmetro", "Hectômetro", "Milímetro", "Decímetro"] 
const medidas = [ "Gramas", "Kilogramas", "Litros", "Militros"]
const moedas = ["Dólar", "Real", "Euro", "Bitcoin"]

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
      setSelect(comprimento)
      break;
      break;
    case "3":
      setSelect(moedas)
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

var imported = document.createElement('script');
imported.src = 'js/temp/main.js';
document.body.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/comprimento/main.js';
document.body.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/moedas/main.js'
document.body.appendChild(imported)

// Conversões
const convert = () => {
  var e = document.getElementById("convert");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      convertTemperatura()
      break;
    case "2":
      convertComprimento()
      break;
    case "3":
      convertMoedas()
      break;
    default:
      break;
  }
}



