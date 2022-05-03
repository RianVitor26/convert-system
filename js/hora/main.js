var imported = document.createElement('script');
imported.src = 'js/hora/segundos.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = 'js/hora/minutos.js';
document.head.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/hora/horas.js';
document.head.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/hora/dias.js';
document.head.appendChild(imported); 

// Convertendo temperatura
const convertHora = () => {
  var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      segundosConvert()
      break;
    case "2":
      minutosConvert()
      break;
    case "3":
      horasConvert()
      break;
    case "4":
      diasConvert()
      break;
  }
}