var imported = document.createElement('script');
imported.src = 'js/comprimento/metro.js';
document.head.appendChild(imported);

imported.src = 'js/comprimento/km.js';
document.head.appendChild(imported); 

imported.src = 'js/comprimento/cm.js';
document.head.appendChild(imported); 

// Convertendo comprimento
const convertComprimento = () => {
  var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      metroConvert()
      break;
    case "2":
      kmConvert()
      break;
    case "3":
      cmConvert()
      break;
  }
}