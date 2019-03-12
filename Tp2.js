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

function precioMaquina (array){
  var sumaDeValores = [];
    // console.log(sumaDeValores)
  for (var i=0; i<local.precios.length;i++){
  // console.log ("local.precio", local.precios[i].componente)
    for (var j=0; j<array.length;j++){
      // console.log ("parametro", array[j])
      if (array[j] === local.precios[i].componente){
        // console.log (local.precios[j].precio)
        sumaDeValores.push(local.precios[i].precio)
        // console.log(sumaDeValores)
      }
    }
  }
  // console.log (sumaDeValores)
  return sumaDeValores.reduce(function (total, valor){
    return total + valor
  })
}

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

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard MZI"]))
console.log(precioMaquina(["Monitor ASC 543", "Motherboard ASUS 1200"]))
console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1200"]))

// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

function cantidadVentasComponente (item){
  var vecesVendido = 0;
  for (var i=0;i<local.ventas.length;i++){
    // console.log(local.ventas[i].componentes)
    for (var j=0;j<local.ventas[i].componentes.length;j++){
      // console.log(local.ventas[i].componentes[j])
      if (item === local.ventas[i].componentes[j]){
        vecesVendido++;
      }
    }
  }
  return vecesVendido
}
console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2
console.log( cantidadVentasComponente("Motherboard ASUS 1500") ); //2
console.log( cantidadVentasComponente("Monitor ASC 543") ); //2
console.log( cantidadVentasComponente("Monitor GPRS 3000") ); //3

// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

// console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
var ventasVendedoras={
Ada:0,
Grace:0,
Hedy:0,
Sheryl:0,
}
for (i=0; i<local.vendedoras.length;i++){
  // console.log(local.vendedoras[i])
  for (j=0;j<local.ventas.length;j++){
    if (local.ventas[j].nombreVendedora===local.vendedoras[i]){
      // precioMaquina(local.ventas[i].componentes)
      
    }
  }
}
console.log(ventasVendedoras)

// var totalVentasGrace=0
// var totalVentasAda=0
// for (i=0; i<local.ventas.length;i++){
//   if (local.ventas[i].nombreVendedora==='Grace'){
//     totalVentasGrace+= precioMaquina(local.ventas[i].componentes)
//   } else if (local.ventas[i].nombreVendedora==='Ada'){
//     totalVentasAda+= precioMaquina(local.ventas[i].componentes)
//   }
// }
// console.log('Grace' , totalVentasGrace)
// console.log('Ada' , totalVentasAda)
//
// if (totalVentasGrace>totalVentasAda){
//   console.log('Grace vendió más')
// } else {
//   console.log('Ada vendió más')
// }
