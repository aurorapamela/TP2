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

function vendedoraDelMes(anio,mes){
  var adaVentas=[];
  var graceVentas=[];
  for (var i=0; i<local.ventas.length;i++){
    var anioVentas=local.ventas[i].fecha.getFullYear()
    var mesVentas=local.ventas[i].fecha.getMonth()+1
    if (anio==anioVentas && mes==mesVentas){
      if(local.ventas[i].nombreVendedora==='Ada'){
      adaVentas.push(precioMaquina(local.ventas[i].componentes))
    } else if (local.ventas[i].nombreVendedora==='Grace'){
      graceVentas.push(precioMaquina(local.ventas[i].componentes))
    }
  }
}
var ventasAda = adaVentas.reduce (function(total,valor){
  return total + valor
})
var ventasGrace = graceVentas.reduce (function(total,valor){
  return total + valor
})
if(ventasAda>ventasGrace){
  return 'Ada'
} else {
  return 'Grace'
}
}
console.log(vendedoraDelMes(2019,1))

function vendedoraDelMes(mes, anio){
  var arrayVendedoras = [];
  for (var j=0; j<local.vendedoras.length;j++){
    var objetoNuevo=
      { nombre: local.vendedoras[j],
        ventas:0,
      }
    for (var i=0; i<local.ventas.length;i++){
      if(local.ventas[i].fecha.getMonth()===mes && local.ventas[i].fecha.getFullYear()==anio){
        if(local.vendedoras[j]===local.ventas[i].nombreVendedora){
          if (objetoNuevo.nombre === local.ventas[i].nombreVendedora){
            objetoNuevo.ventas=objetoNuevo.ventas + precioMaquina(local.ventas[i].componentes)
          }
        }
      }
    }
    arrayVendedoras.push(objetoNuevo)
  }
  console.log(arrayVendedoras)
  var valorMaximo=0;
  var nombreVendedora='';
  for (var k = 0;k<arrayVendedoras.length;k++){
    if(valorMaximo<arrayVendedoras[k].ventas){
      valorMaximo=arrayVendedoras[k].ventas
      nombreVendedora=arrayVendedoras[k].nombre
    }
  }
  return nombreVendedora
}
console.log(vendedoraDelMes(1,2019))

// ventasMes(mes, anio): Obtener las ventas de un mes.

function ventasMes(mes,anio){
  var ventasPorMes=[];
  for (var i=0; i<local.ventas.length;i++){
    var anioVentas=local.ventas[i].fecha.getFullYear()
    var mesVentas=local.ventas[i].fecha.getMonth()+1
    if (anio==anioVentas && mes==mesVentas){
    ventasPorMes.push(precioMaquina(local.ventas[i].componentes))
  } else {
    ventasPorMes.push(0)
  }
}
  return ventasPorMes.reduce (function(total,valor){
  return total + valor
  })
}

console.log(ventasMes(1, 2019) ); // 1250
console.log(ventasMes(2, 2019) );

// ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
function ventasVendedora(nombreVendedora){
  var ventasVendedorasTotal=[];
  for (var i=0; i<local.ventas.length;i++){
    if (local.ventas[i].nombreVendedora===nombreVendedora){
    ventasVendedorasTotal.push (precioMaquina(local.ventas[i].componentes))
}
}
  return ventasVendedorasTotal.reduce (function(total,valor){
  return total + valor
  })
}
console.log( ventasVendedora("Grace") ); // 900
console.log( ventasVendedora("Ada") ); // 670

// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
function componenteMasVendido(){
  var total=[]
  var soloNumeros=[]
  for (var i=0; i<local.precios.length;i++){
    total.push (cantidadVentasComponente(local.precios[i].componente),local.precios[i].componente)
  }
  for (var j=0; j<total.length;j+=2){
    soloNumeros.push(total[j])
  }
  var numeroMayor = Math.max.apply(null, soloNumeros);
  var posicionNumeroMayor = total.indexOf(numeroMayor)
  return total[posicionNumeroMayor+1]
}
console.log( componenteMasVendido() ); // Monitor GPRS 3000

// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

function huboVentas(mes,anio){
  if(ventasMes(mes, anio)>0){
    return true + ' hubo ventas'
  } else {
    return false + ' no hubo ventas'
  }
}
console.log(huboVentas(3, 2019)); // false
console.log(huboVentas(1, 2019)); // true
console.log(huboVentas(2, 2019)); // true

// Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. Por este cambio, se pide:
// En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
for (var i = 0; i < local.ventas.length; i++) {
  local.ventas[i].sucursal="Centro"
  // console.log(local.ventas)
}
// Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
local.sucursal=["Centro","Caballito"]
// console.log(local)
// Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
var data = [
  {fecha: new Date(2019, 1, 12), nombreVendora:'Hedy', componentes:['Monitor GPRS 3000', 'HDD Toyiva'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 24), nombreVendora:'Sheryl', componentes:['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal:'Caballito'},
  {fecha: new Date(2019, 1, 1), nombreVendedora:'Ada', componentes:['Motherboard MZI', 'RAM Quinston Fury'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 11), nombreVendedora:'Grace', componentes:['Monitor ASC 543', 'RAM Quinston'], sucursal:'Caballito'},
  {fecha: new Date(2019, 1, 15), nombreVendedora:'Ada', componentes:['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 12), nombreVendedora:'Hedy', componentes:['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal:'Caballito'},
  {fecha: new Date(2019, 1, 21), nombreVendedora:'Grace', componentes:['Motherboard MZI', 'RAM Quinston'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 8), nombreVendedora:'Sheryl', componentes:['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 16), nombreVendedora:'Sheryl', componentes:['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 27), nombreVendedora:'Hedy', componentes:['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal:'Caballito'},
  {fecha: new Date(2019, 1, 22), nombreVendedora:'Grace', componentes:['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 5), nombreVendedora:'Ada', componentes:['Motherboard ASUS 1500', 'RAM Quinston'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 1), nombreVendedora:'Grace', componentes:['Motherboard MZI', 'HDD Wezter Dishital'], sucursal:'Centro'},
  {fecha: new Date(2019, 1, 7), nombreVendedora:'Sheryl', componentes:['Monitor GPRS 3000', 'RAM Quinston'], sucursal:'Caballito'},
  {fecha: new Date(2019, 1, 14), nombreVendedora:'Ada', componentes:['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal:'Centro'},
]

for (var i = 0; i < data.length; i++) {
  local.ventas.push(data[i])
}
// console.log(local.ventas)

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
function ventasSucursal(nombreSucursal){
  var cantidadVendidoSucursal=[];
  for (var i=0;i<local.ventas.length;i++){
    if (nombreSucursal=== local.ventas[i].sucursal){
      cantidadVendidoSucursal.push(precioMaquina(local.ventas[i].componentes))
    }
  }
  return cantidadVendidoSucursal.reduce (function(total,valor){
  return total + valor
  })
}
console.log( ventasSucursal("Centro") ); // 4195
console.log( ventasSucursal("Caballito") ); //

// console.log(precioMaquina(local.ventas[0].componentes),local.ventas[0].sucursal)
// console.log(precioMaquina(local.ventas[1].componentes),local.ventas[1].sucursal)
// console.log(precioMaquina(local.ventas[2].componentes),local.ventas[2].sucursal)
// console.log(precioMaquina(local.ventas[3].componentes),local.ventas[3].sucursal)
// console.log(precioMaquina(local.ventas[4].componentes),local.ventas[4].sucursal)
// console.log(precioMaquina(local.ventas[5].componentes),local.ventas[5].sucursal)
// console.log(precioMaquina(local.ventas[6].componentes),local.ventas[6].sucursal)
// console.log(precioMaquina(local.ventas[7].componentes),local.ventas[7].sucursal)
// console.log(precioMaquina(local.ventas[8].componentes),local.ventas[8].sucursal)
// console.log(precioMaquina(local.ventas[9].componentes),local.ventas[9].sucursal)
// console.log(precioMaquina(local.ventas[10].componentes),local.ventas[10].sucursal)
// console.log(precioMaquina(local.ventas[11].componentes),local.ventas[11].sucursal)
// console.log(precioMaquina(local.ventas[12].componentes),local.ventas[12].sucursal)
// console.log(precioMaquina(local.ventas[13].componentes),local.ventas[13].sucursal)
// console.log(precioMaquina(local.ventas[14].componentes),local.ventas[14].sucursal)
// console.log(precioMaquina(local.ventas[15].componentes),local.ventas[15].sucursal)
// console.log(precioMaquina(local.ventas[16].componentes),local.ventas[16].sucursal)
// console.log(precioMaquina(local.ventas[17].componentes),local.ventas[17].sucursal)
// console.log(precioMaquina(local.ventas[18].componentes),local.ventas[18].sucursal)
// console.log(precioMaquina(local.ventas[19].componentes),local.ventas[19].sucursal)

// Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

function ventas(parametro){
  var cantidadVendido=[];
  for (var i=0;i<local.ventas.length;i++){
    if (parametro=== local.ventas[i].sucursal || parametro=== local.ventas[i].nombreVendedora ){
      cantidadVendido.push(precioMaquina(local.ventas[i].componentes))
    }
  }
  return cantidadVendido.reduce (function(total,valor){
  return total + valor
  })
}
console.log(ventas("Centro") ); // 4195
console.log(ventas("Ada") );
console.log(ventas("Grace") );
console.log(ventas("Hedy") ); // 400

// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
function sucursalDelMes(mes, anio){
  var totalesSucursalesMeses = [];
  var soloNumerosVentasSucursalesPorMes = [];
  for (var i=0; i<local.ventas.length;i++){
    var anioVentas=local.ventas[i].fecha.getFullYear()
    var mesVentas=local.ventas[i].fecha.getMonth()+1
      if (mes==mesVentas && anio==anioVentas){
      totalesSucursalesMeses.push (precioMaquina(local.ventas[i].componentes),local.ventas[i].sucursal)
      }
    }
  for (var j=0; j<totalesSucursalesMeses.length;j+=2){
    soloNumerosVentasSucursalesPorMes.push(totalesSucursalesMeses[j])
  }
  var numeroMayor = Math.max.apply(null, soloNumerosVentasSucursalesPorMes);
  var posicionNumeroMayor = totalesSucursalesMeses.indexOf(numeroMayor)
  return totalesSucursalesMeses[posicionNumeroMayor+1]
}

console.log(sucursalDelMes(1, 2019)); // "Centro"

// Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:
// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

// function renderPorMes(){
//   var mes=[];
//   var anio=[];
//   var total=[];
//   for (var i=0; i<local.ventas.length;i++){
//     mes.push(local.ventas[i].fecha.getMonth()+1)
//     anio.push(local.ventas[i].fecha.getFullYear())
//     var mesYAnio={
//       elMes: mes[i],
//       elAnio: anio[i],
//       ventas: ventasMes(mes[i], anio[i]),
//     }
//   if(mesYAnio.elMes===mes[i] && mesYAnio.elAnio==anio[i]){
//     if (!mesYAnio.elMes[i]){
//       total.push(mesYAnio)
//     }
//   }
// }
// console.log(total)
// }
// console.log(renderPorMes());

function renderPorMes(){
  var meses=[];
  for (var i=0; i<local.ventas.length;i++){
    meses.push(local.ventas[i].fecha.getMonth()+1)
  }
  var anio=[];
  for (var j=0; j<local.ventas.length;j++){
    anio.push(local.ventas[j].fecha.getFullYear())
  }
  var vendido=[];
  for (var k=0; k<meses.length;k++){
    vendido.push(ventasMes(meses[k],anio[k]));
  }

  return 'Ventas por mes: '+'\n'+'Total de enero 2019:'+vendido[0]+'\n'+'Total de febrero 2019: '+vendido[1]
}
console.log(renderPorMes());

// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210


// renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal(){
  var sucursalesTodas=[];
  for (j=0; j<local.ventas.length;j++){
    sucursalesTodas.push(local.ventas[j].sucursal);
  }
  var cantidadVendidoSucursal=[];
  for (i=0; i<local.ventas.length;i++){
    if('Centro'=== local.ventas[i].sucursal || 'Caballito'=== local.ventas[i].sucursal){
      cantidadVendidoSucursal.push(ventasSucursal(local.ventas[i].sucursal))
    }
  }
  return 'Ventas por sucursal'+'\n'+'Total de Centro 2019:'+cantidadVendidoSucursal[0]+'\n'+'Total de Caballito 2019: '+cantidadVendidoSucursal[6]
}

console.log( renderPorSucursal() );
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265

// render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó
// console.log( render() );
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace

function render (){
  return 'Reporte' + '\n' + renderPorMes() +'\n' + renderPorSucursal() + '\n' + 'Producto estrella: ' + componenteMasVendido() + 'Vendedora que más ingresos generó: ' +'\n'
}
console.log (render())
