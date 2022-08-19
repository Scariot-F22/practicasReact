// 1) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// const recorteTexto = (cadena, recorte) => cadena.substr(cadena, recorte)


    const recorteTexto = (cadena, recorte) => cadena.slice(0, recorte)
        console.log(recorteTexto("Hola Mundo", 4))

// 2) Programa una función que dada una cadena te devuelva un Array de textos separados por cierto caracter, 
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

    const separarTexto = (string, caracter) => string.split(caracter)
        console.log(separarTexto("Hola yo soy Franco", " "))

// 3) Programa una función que repita un texto X veces, 
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

    const repetirTexto = (texto, repetir) => texto.repeat(repetir)
        console.log(repetirTexto("Mi mamá me mima", 10,))

// 4) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

    const invertirPalabras = (palabra) => palabra.split("").reverse().join("")
        console.log(invertirPalabras("la Allegra no para de llorar"))

// 5) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    
    const contarPalabrasRepetidas = (texto, palabra) => {
        let nuevoArray = [];
        let array = texto.split(" ");
        array.map(el => {
            if (el.toLowerCase() === palabra.toLowerCase()) {
                nuevoArray.push(el);
            }
        });
    return nuevoArray.length
    }
    
        console.log(contarPalabrasRepetidas("Hola mundo que tal mundo como estas mundo adios mundo hasta luego mundo", "mundo"))

// 6) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

    const esPalindromo = (palabra) => palabra.toLowerCase() === palabra.split("").reverse().join("").toLowerCase()
    console.log(esPalindromo("Lol"))

// 7) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".

const eliminarPatron = (string, patron) => {

    //con metodo split, separa por parametro pasado, y los elimina, devuelve una nueva array

    // string = string.toLowerCase();
    // patron = patron.toLowerCase();
    // recortarConPatron = string.split(patron, 4).join("")
    // return recortarConPatron

    // con expresión regular. g hace coincidir en todo el texto de corrido. i ignora entre mayúsculas y minúsculas

    return string.replace(new RegExp(patron, "gi"), "")
}


console.log(eliminarPatron("xyz1, xYz2, xyz3, xyz4, xyz5", "xyz"))



// 8) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () =>  Math.round(Math.random() * 100) + 500
console.log(numeroAleatorio())

// 9) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const esCapicua = (numero) =>  numero.toString() === numero.toString().split("").reverse().join("")
console.log(esCapicua(202))

// 10) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
// se define como el producto de todos los números enteros positivos desde 1 hasta n), 
//pe. miFuncion(5) devolverá 120.

// const factorial= (numero) => numero.forEach(el => {
//     contador= numero
//     resultado= el * contador
//     contador--
//     return resultado
// });
// console.log(factorial(5))

const factorial = (numero) => {

        //** CON RECURSIVIDAD */
    
        if (numero === 0) { 
            return 1; 
        }
        return numero * factorial (numero-1); 

    //** CON BUCLE FOR */
    
    // let resultado = 1;
    // for (let i = 1; i <= numero; i++) {
    //      resultado = resultado * i
    // }
    // return resultado

}
console.log(factorial(6))

//11) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.

const calcularPrecio = (precio, descuento) => precio - ((precio * descuento) /100)
console.log(calcularPrecio(10000, 20))

// 12) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.

const convertidorTemperatura = (valor, unidad) => {

    //** VALIDACIONES */

    // if (unidad.toUpperCase() === "C") {
    //     celcius = valor * 9/5 +32;
    //     return `${celcius}°F`
    // }
    // if (unidad.toUpperCase() === "F") {
    //     faranheit =  (valor - 32) * 5/9;
    //     return `${faranheit}°C`
    // }
    // return "Unidad de medida inválida"

    //** SWITCH CASE */

    switch (unidad.toUpperCase()) {
        case "C":
            return `${valor * 9/5 +32}°F`;
        case "F":
            return `${(valor - 32) * 5/9}°C`
        default: return "Unidad de medida inválida"
    }
}
console.log(convertidorTemperatura(0, "c"))


// 13) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.

const conversorUnidadesNumericas = (numero, base) => {

    if (base === 2) {
        let decimal = parseInt(numero, 2)  // PASA TODOS LOS NUMEROS INGRESADOS CON BASE ESPECIFICADA, A DECIMAL
        return `${decimal}, base 10`
    }

    // if (base === 10){

    //     let binario = (numero % 2).toString();
    //     for (; numero > 1;) { // forma abreviada, Js sobreentiende que index = 0; y que index++;
    //         numero = parseInt(numero/2);
    //         binario =  (numero % 2) + binario;
    //     }
    //     return `${binario}, base 2`
    // }

    if (base === 10){
        let binario = numero.toString(2);
        return `${binario}, base 2`
    }

    else return "sistema numérico inválido"

}
console.log(conversorUnidadesNumericas(1111, 2))

// Bonus:
// 14) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años.

// 15) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (string) => {
    let vocales = string.match(/[aeiouáéíóú]/gi)
    let consonantes = string.match(/[^aeiouáéíóú .,;-]/gi)
    return `Vocales :${vocales.length}, Consonantes: ${consonantes.length}`
}
console.log(contarLetras("Hola mundo desde una expresión regular"))

// 16) Programa una función que valide que un texto sea un email válido, 
//pe. miFuncion("academia@numen.com") devolverá verdadero.

const validarMail = mail => (/(^[\w])([\w._+-]+)@([A-Za-z]*)\.[com]([.a-zA-Z]*$)/gi).test(mail)
console.log(validarMail("francoscariot@yahoo.com"))

// 17) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const minMax = (array) => {
    let nuevoArray = [],
    minimo = Math.min(...array),
    maximo = Math.max(...array);
    nuevoArray.push(minimo);
    nuevoArray.push(maximo);
    return nuevoArray

//     let masAlto = 0,
//     masBajo = array[0],
//     masAltoYMasBajo = [masAlto, masBajo]
  
//   for (let i = 0; i < array.length; i++) {

//       if (array[i] > masAlto) {
//         masAlto = array[i]
//         masAltoYMasBajo[0] = masAlto
//       }

//       if (array[i] < masBajo) {
//         masBajo = array[i]
//         masAltoYMasBajo[1] = masBajo
//       }
//   }

//   return masAltoYMasBajo
}
console.log(minMax([1,5,99,-4]))

// //DESTRUCTURING

// const array = [1,2,3,4,5,]
// const [a,b,c,d,e]= array
// console.log(a,b,c,d,e)

// const objeto = {
//     nombre: "Franco",
//     apellido: "Scariot",
//     edad: 29
// }
// const{nombre,apellido,edad} = objeto
// console.log(nombre,apellido,edad)

// //PARAMETROS REST

// const suma = (a,b, ...c) => {
//     let total= a + b
//     c.forEach(numero => total = numero + total)
//     return total
// }
// console.log(suma(2,2,4,5,6,7,6,5))

// //SPREAD OPERATOR
// const array1= [1,2,3,4,5],
//     array2= [6,7,8,9],
//     array3=[...array1, ...array2]
// console.log(array3)

// 18) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarAlCuadrado = array => array.map(num => num ** 2) //igual a decir: Math.pow(num, 2)
console.log(elevarAlCuadrado([2,2,6]))

// 19) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarRepetidos = (array) => {

    // const result = array.reduce((acum,item) => {
    //     if(!acum.includes(item)){
    //         acum.push(item);
    //     }
    //     return acum;
    // },[])//<- acum
    // return result
  
    const instanciadelArray = new Set(array); //El objeto Set permite almacenar valores únicos de cualquier tipo.
    //Los objetos Set son colecciones de valores. 
    //Puede iterar a través de los elementos de un conjunto en orden de inserción. 
    //Un valor en un Set solo puede ocurrir una vez ; es único en la colección del Set.
    //Debido a que cada valor en el Set tiene que ser unico, se verificara la igualdad de valores.
    let result = [...instanciadelArray];
    //se puede convertir el nuevo Set a un arreglo nuevamente utilizando spread operator.
    return result
}
    //tiene mejor perfomance con objeto Set.
console.log(eliminarRepetidos([1,1,1,1,2,3,7,7,7,8,9,]))

// 20) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArray = (arr)=> {
    const asc=[];
    const desc=[];
    const nuevoObjeto= {asc, desc}
    let ascendente = arr.sort((a,b)=>a-b).join(", ");
    let descendente = arr.sort((a,b)=>b-a).join(", ");
    asc.push(ascendente);
    desc.push(descendente);
    return nuevoObjeto
}
console.log(ordenarArray([7, 9, 5, 7, 8, 6]))


// 21)
    /* 
        Trolls are attacking your comment section!

        A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

        Your task is to write a function that takes a string and return a new string with all vowels removed.

        For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

        Note: for this kata y isn't considered a vowel.

    */
const removeVowels = (string)=>  string.split(/[aeiou]/gi).join("");
console.log(removeVowels("This website is for losers LOL!"))

// 22)
    /* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

    Note: The function accepts an integer and returns an integer */
const numSquared = (num)=>{
    let arr = num.toString().split("");
    let elevation = arr.map(el=> el ** 2).join("");
    return parseInt(elevation)
    
};
console.log(numSquared(9119))