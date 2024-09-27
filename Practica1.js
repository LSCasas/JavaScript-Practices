// monto previsto para ese mismo dia
const montoPrevisto=11;

// Crear una variable para guardar el numero de ordenes en un dia
const ordenesEfectivas = 11;

function proyectarCapacidad() {
//Si las ordenes superaron el monto previsto
if (ordenesEfectivas > montoPrevisto) {
    console.log("Debes incrementar la capacidad en el siguien dia")


    //O si por el contrario la cantidad de ordenes fue menor, para asi reducir su capacidad
} else if ( ordenesEfectivas < montoPrevisto) { console.log("Debes reducir la capidad")
} else { 
    console.log ("Estas bien Carlos, Sigues asi")
}
}
//llamar la funcion
proyectarCapacidad();