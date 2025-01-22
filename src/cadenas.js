// CADENAS (STRINGS)

/**
 * Ejercicio 3.1
 * 
 * Haz una función llamada vocalsCount que reciba una cadena como parámetro y regrese cuántas vocales contiene tanto mayúsculas como minúsculas
 */

// vocalsCount(string)


/** 
 * Ejercicio 3.2
 * 
 * Haz una función llamada countWords que reciba una frase como parámetro y regrese un número que indique cuántas palabras hay en la frase
 */

// countWords(phrase)
function countWords(phrase){
    let palabras = 0
    if(phrase != ""){
        phrase = phrase.trim().split(" ")
        palabras = phrase.length
    }
    return palabras
}


/**
 * Ejercicio 3.3
 * 
 * Haz una función llamada hideInfo que reciba una cadena como parámetro y regrese una cadena la misma cadena pero remplazando todos los caracteres por * execpto los últimos 4 dígitos. Por ejemplo, "1234567890" -> "******7890"
 */
function hideInfo(string){
    let cadena = ""
    let longitud = string.length
    for(let i = 0; i<longitud-4; i++){
        cadena += "*"
    }
    cadena += string.slice(longitud-4)
    return cadena

}

/**
 * Ejercicio 3.4
 * 
 * Haz una función llamada getlastWord que reciba una cadena como parámetro y regrese la última palabra
 * 
 * getlastWord(string)
 * 
 */