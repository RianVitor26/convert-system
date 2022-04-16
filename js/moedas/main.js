var imported = document.createElement('script')
imported.src = 'js/moedas/dolar.js';
document.head.appendChild(imported);

var imported = document.createElement('script')
imported.src = 'js/moedas/real.js';
document.head.appendChild(imported);

var imported = document.createElement('script')
imported.src = 'js/moedas/euro.js';
document.head.appendChild(imported);

var imported = document.createElement('script')
imported.src = 'js/moedas/bitcoin.js';
document.head.appendChild(imported);

//Convertendo moedas

const ConvertMoedas = () => {
    var e = document.getElementById("select-left");
  var index = e.options[e.selectedIndex].value;
  switch (index) {
    case "1":
      dolarConvert()
      break;
    case "2":
      realConvert()
      break;
    case "3":
      euroConvert()
      break;
    case "4":
      bitcoinConvert()
      break;
  }
}