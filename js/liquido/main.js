var imported = document.createElement('script')
imported.src = 'js/liquido/mililitros.js';
document.head.appendChild(imported);

var imported = document.createElement('script')
imported.src = 'js/liquido/litros.js';
document.head.appendChild(imported);

//Convertendo liquido

const convertLiquido = () => {
    var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      mililitrosConvert()
      break;
    case "2":
      litrosConvert()
      break;
  }
}