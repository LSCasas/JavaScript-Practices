// Abstraccion
//1. La frase que se quiere seleccionar debe estar dentro de un array
//2. Para seleccionar su posicion utilizara los argumentos texto, index
//3. Se necesita usar condicionales if, else
//4. Se utiliza el condicional if (condicion: la palabra que seleccionaste es mayor al numero de palabras que hay del array o que sea menor 0)
//5. en este caso debe imprimir "solo se pueden seleccionar palabras de la 0 a la 8"


const imprimirElemento = (texto, index) => {
    const palabras = texto.split(" "); 

    if (index >= palabras.length || index < 0) {
        console.log("Solo se pueden imprimir palabras de la 0 a 8");
    } else {
        const palabraSeleccionada = palabras[index]; 
        console.log("La palabra seleccionada es:", palabraSeleccionada);
        console.log("Número de letras de la palabra seleccionada:", palabraSeleccionada.length);
        
        palabras.splice(index, 1);

        console.log("Frase sin la palabra seleccionada:", palabras.join(" "));
    }
};

const frase = "La mejor forma de predecir el futuro es creandolo";
imprimirElemento(frase, 0); 
