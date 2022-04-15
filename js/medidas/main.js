var imported = document.createElement('script');
imported.src = 'js/medidas/gramas.js';
document.head.appendChild(imported);

imported.src = 'js/medidas/kggramas.js';
document.head.appendChild(imported); 

imported.src = 'js/medidas/litros.js';
document.head.appendChild(imported); 

imported.src = 'js/medidas/ml.js';
document.head.appendChild(imported); 

// Convertendo comprimento
const convertComprimento = () => {
  var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      gramasConvert()
      break;
    case "2":
      kggramasConvert()
      break;
    case "3":
      litrosConvert()
      break;
    case "4":
      mlConvert()
      break;
  }
}