
//Ejercicio 1

//A.Se requiere saber cuantos caracteres tiene la frase
//B. Saber cuantas letras tiene la frase
//C. Saber cuantas palabras tiene la frae
//D. Obtener la misma frase pero en mayusculas
//E. Obtener la misma frase pero con las letras "a" reemplazadas con un "4"

const phrase = "La mejor forma de predecir el futuro es creandolo"


//A. Caracteres
//1. Tener una frase o una variedad de caracteres que se van a implementar
//2. Tener un total que empize desde cero
//3. Tener un contador que se encuentre en la posicion inicial y que valga 0
//4. Empezar a validar caracter por caracter de la frase o un conjunto de caracteres. donde por cada letra, espacio ,numero, signo etc, se analize
//5. Una vez analizado, pasar al siguiente caracter
//6. Aumentar el contador 1, por cada caracter
//7. Una vez que el contador llegue al final, pasar el resultado al total

const contarCaracteres = phrase => phrase.length;
console.log("El total de caracteres es:", contarCaracteres(phrase));



//B. Validar letras de la frase
//1. Tener una frase o una variedad de caracteres que se van a implementar
//2. Tener un total que empize desde cero, y tener una lista con los caracteres del Abecedario latin 
//3. Tener un contador que se encuentre en la posicion inicial y que valga 0
//4. Empezar a validar caracter por caracter de la frase o un conjunto de caracteres. donde por cada letra,se valide en el abecedario, si es que es una letra
//5. Aumentar el contador 1, por cada caracter que sea validado como una letra y este en el abecedario latin
//6. Una vez analizado, pasar al siguiente caracter
//7. Uvez que el contador llegue al final, pasar el resultado al total

const contarLetras = phrase => {
    const letras = phrase.split("");
    return letras.length;
};

console.log("El total de letras es:", contarLetras(phrase))
//C. Saber cuantas palabras tiene la frase
//1. Definir palabra, como un conjunto de letras que estan integradas, antes de un espacio y despues de un espacio
//2. Tener un total que empize desde cero, y definir espacio como " ", y que ademas definir que una palabra solo puede estar compuesta por letras del abecedario latin
//3. Tener un contador que se encuentre en la posicion inicial y que valga 0
//4. Divir todo el conjunto de letras que este separado por un espacio
//5. Aumentar el contador 1, por cada conjunto de letras
//6. Una vez analizado, pasar al siguiente conjunto de letras
//7. Uvez que el contador llegue al final, pasar el resultado al total


const contarPalabras = phrase => {
    const palabras = phrase.split(" ");
    return palabras.length;
};
console.log("El total de palabras es:", contarPalabras(phrase));


//otra opcion
const countWord = (text) => text.split (" ").length
console.log (countWord)


//D. Poner mi frase en Mayusculas
//1. Tener una frase o caracteres del abecedario latin
//2. Validar caracter caracteres, para saber si son del abecedario latin
//3. Una vez validado que sea un caracter que este dentro del diccionario latin y que sea una letra, modificar la misma letra, pero en la version mayuscula del diccionario latin
//6. Una vez analizado, pasar al siguiente caracter
//7. Uvez que el contador llegue al final, imprimir todo las letra en mayusculas

const mayusculas = phrase => phrase.toUpperCase;
console.log("Letras mayusculas: ", mayusculas)

//E. Obtener la misma frase pero con las letras "a" reemplazadas con un "4"
//1. Tener una frase o caracteres del abecedario latin
//2. definir "a", como una letra dentro del abecedario latin
//2. Tener una constante llamada verificacion, y posicionarla al inicio
//3. Una vez creada la verificacion, validadar  la verificacion dentro de un caracter para saber si es una letra
//6. si no es una letra del abecedario, latin, pasar al siguiente caracter
//7. si es una letra del abecedario latin, validar que sea la letra "a"
//8. si es la letra "a", entonces remplazarla por el numero 4, y pasar al siguiente caracter
//9. Si es una letra, pero no es la letra "a", no hacer nada y pasar al siguiente caracter
//9. Repetir los pasos 6,7,8,9
//10. Imprimir la frase inicial, pero como quedaria con la frase final (usando el metodo que se empleo )


const reemplazarLetras = phrase => {
    return phrase.replace(/a/g, '4');
};

console.log("Frase con 'a' reemplazada por '4':", reemplazarLetras(phrase))




//Otra opcion

const replacePart = (text, toreplace,  replacement) => 
text.replaceAll(toreplace, replacement)
let regex = /[aA]/g;
let replacementone = replacePart (phrase, regex, "4");
console.log(replacementone)




