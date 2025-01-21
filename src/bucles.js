// 2.- BUCLES

/**
 * Ejercicio 2.1
 *
 * Haz una función llamada count que reciba un número n como parámetro, y retorne una cadena que contenga todos los números enteros desde el 1 hasta n separados por comas
 */

// count(number)
function count(number){
    if (number <= 0) {
        return "Número inválido";
    }

    let cadena = "1";
    for(let i = 2; i<=number; i++ ){
        cadena = cadena + "," + i
    }
    return cadena
}

/**
 * Ejercicio 2.2
 *
 * Haz una función de nombre sumUntil que reciba un número n como parámetro y que retorne la suma de todos los números desde 1 hasta n.
 */

// sumUntil(number)
function sumUntil(number){
        if (number <= 0) {
            return "Número inválido";
        }
    
        let cadena = 1;
        for(let i = 2; i<=number; i++ ){
            cadena = cadena + i
        }
        return cadena
}
/**
 * Ejercicio 2.3
 *
 * Haz una funcion llamada getPairs que reciba un número n como parámetro y retorne una cadena con todos los números desde 1 hasta n que sean pares separados por coma.
 */

// getPairs(number)
function getPairs(number) {
    if (number <= 0) {
        return "Número inválido";
    }

    let cadena = "";
    for (let i = 2; i <= number; i += 2) {
        if (cadena !== "") {
            cadena += ","; 
        }
        cadena = cadena + i;
    }
    return cadena;
}
