var imported = document.createElement('script')
imported.src = 'js/peso/gramas.js';
document.head.appendChild(imported);

var imported = document.createElement('script')
imported.src = 'js/peso/quilogramas.js';
document.head.appendChild(imported);

var imported = document.createElement('script')
imported.src = 'js/peso/toneladas.js';
document.head.appendChild(imported);

//Convertendo peso

const convertPeso = () => {
    var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      gramasConvert()
      break;
    case "2":
      quilogramasConvert()
      break;
    case "3":
      toneladasConvert()
      break;
  }
}