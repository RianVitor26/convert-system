var imported = document.createElement('script');
imported.src = 'js/temp/celsiusTemp.js';
document.head.appendChild(imported);

imported.src = 'js/temp/fahr.js';
document.head.appendChild(imported); 

imported.src = 'js/temp/kelvinTemp.js';
document.head.appendChild(imported); 

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