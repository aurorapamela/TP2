// Trabajo Práctico 2 - JS
// Local de ventas de PCs
// Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:
//
// Lista de las vendedoras de la empresa
// Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), componentes (un array Strings con el nombre de cada componente vendido).
// Lista de precios de los componentes, de la forma (nombre componente, precio).

var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

// console.log (local.ventas[0].componentes)
// console.log (local.ventas[1].fecha[0])
// console.log ((local.precios[0].precio)+(local.precios[1].precio)

// function precioMaquina (array){
//   var sumaDeValores = [];
//     // console.log(sumaDeValores)
//   for (var i=0; i<local.precios.length;i++){
//   // console.log ("local.precio", local.precios[i].componente)
//     for (var j=0; j<array.length;j++){
//       // console.log ("parametro", array[j])
//       if (array[j] === local.precios[i].componente){
//         // console.log (local.precios[j].precio)
//         sumaDeValores.push(local.precios[i].precio)
//         // console.log(sumaDeValores)
//       }
//     }
//   }
//   // console.log (sumaDeValores)
//   return sumaDeValores.reduce(function (total, valor){
//     return total + valor
//   })
// }

function precioMaquina (array){
  var sumaDeValores = [];
    // console.log(sumaDeValores)
  for (var i=0; i<array.length;i++){
  // console.log ("local.precio", local.precios[i].componente)
    for (var j=0; j<local.precios.length;j++){
      // console.log ("parametro", array[j])
      if (array[i] === local.precios[j].componente){
        // console.log (local.precios[j].precio)
        sumaDeValores.push(local.precios[j].precio)
        // console.log(sumaDeValores)
      }
    }
  }
  // console.log (sumaDeValores)
  return sumaDeValores.reduce(function (total, valor){
    return total + valor
  })
}
// Se pide desarrollar las siguientes funciones:
//
// precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]))
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1200"]))
