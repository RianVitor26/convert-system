const temperatura = [ "Celsius", "Fahrenheit", "kelvin"]
const dados = [ "Bit", "Byte", "Terabyte"]

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
