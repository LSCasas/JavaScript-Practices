
//Calculadora IMC


//funcion del porgrama, va a realizar la operacion para poder lograr obtener el IMC
function calcularIMC (pesoParametro,alturaParametro){
    const IMC = pesoParametro / (alturaParametro ** 2)
console.log("tu indice de masa corporal es", IMC);
return IMC;
}

//cons categoria: da una categoria debendiendo de cual sea tu IMC, desde peso saludame 0 > a <18.5 que es el peso saludable y IMC >29.9 contara como obecidad
const darCategoriaIMC = (IMC) => {
    if (isNaN(IMC)) {
        console.log("Error: Los valores iniciales no son validos.")
    }
    else if (IMC < 18.5 ) {
        console.log("Tu categoria es bajo peso")
    } else if (IMC <24.9) {
        console.log("Tu categoria es saludable")
    } else if (IMC <29.9) {
        console.log("Tu categoria es Sobrepeso")
    } else {
        console.log("Tu categoria es Obesidad")
    }
}

//Ejemplo de uso
const peso = 71;
const altura = 1.89;

darCategoriaIMC(calcularIMC(peso, altura));