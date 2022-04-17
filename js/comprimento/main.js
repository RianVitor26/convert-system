var imported = document.createElement('script');
imported.src = 'js/comprimento/metro.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = 'js/comprimento/km.js';
document.head.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/comprimento/cm.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = 'js/comprimento/mm.js';
document.head.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/comprimento/hm.js';
document.head.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/comprimento/dm.js';
document.head.appendChild(imported); 

var imported = document.createElement('script');
imported.src = 'js/comprimento/dam.js';
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
    case "4":
      dmConvert()
      break;
    case "5":
      hmConvert()
      break;
    case "6":
      mmConvert()
      break;
    case "7":
      dmConvert()
      break;
  }
}