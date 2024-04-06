function calcularIMC(peso, estatura) {
 const resultado = peso / (estatura*estatura);
console.log(resultado)
 if (resultado <18.5) {
    console.log("Bajo peso");
 } else if ( 18.5<resultado >24.9) {
    console.log("Peso Saludable");
 } else if (24.9 < resultado > 29.9) {
    console.log("Sobrepeso");
 } else { 
    console.log("obesidad");
 }

 return resultado;

}
console.log (calcularIMC (62,164))