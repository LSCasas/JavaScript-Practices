const imprimirElemento = (texto, index, eliminar) => {
    const palabras = texto.split(" "); // Separar la frase en palabras y almacenarlas en un array

    if (index > palabras.length) {
        console.log("No se puede imprimir arrays mayores al número de palabras");
    } else {
        const palabraSeleccionada = palabras[index - 1]; // Acceder a la palabra del array según el índice especificado
        console.log("La palabra seleccionada es:", palabraSeleccionada);
        console.log("Número de letras de la palabra seleccionada:", palabraSeleccionada.length);
        
        palabras.splice(index - 1, 1); // Eliminar la palabra seleccionada del array

        console.log("Frase sin la palabra seleccionada:", palabras.join(" "));
    }
};

const frase = "La mejor forma de predecir el futuro es creandolo";
imprimirElemento(frase, 5); // Ejemplo de uso: Seleccionar la quinta palabra
