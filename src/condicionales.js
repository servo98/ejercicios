// 1.- Condicionales

/**
 * Ejercicio 1.1
 * 
 * Determinar si un número es par o impar
 * 
 * Crea una función llamada isPair que reciba un número como parámetro y que retorne true si es número par o false si es impar
 * 
 * isPair(number)
 */
function isPair(number){
    if (number%2 == 0){
        return true
    }
    return false
}

/**
 * Ejercicio 1.2
 * 
 * Haz una función llamada greatest que reciba dos números y que regrese el mayor de los 2
 * 
 * greatest(number1, number2)
 */
function greatest(number1, number2){
    if (number1 > number2){
        return number1
    }
    return number2

}

/**
 * Ejercicio 1.3
 * 
 * Haz una función de nombre compareLength que reciba dos cadenas como parámetros y retorne "cadena1" si la primera cadena es más larga,  "cadena2" si la segunda cadena es más larga, o "iguales" si tienen la misma longitud, puedes usar la propiedad .length para saber la longitud de una cadena
 * 
 * compareLength(string1, string2)
 */
function compareLength(string1, string2){
    if(string1.length > string2.length){
        return 'cadena1'
    } else if (string1.length < string2.length) {
        return 'cadena2'
    }
    return 'iguales'
}

/**
 * Ejercicio 1.4
 * 
 * Crea una función llamada getDay que recibac un número del 1 al 7 como parámetro y retorne el nombre del día de la semana correspondiente (por ejemplo, 1 = 'lunes'). Si el número no está en rango, retorne 'Número inválido'.
 * 
 * getDay(number)
 */
function getDay(number){

}


/**
 * Ejercicio 1.5
 * 
 * Haz una función llamada gradeStudent que reciba un número del 0 al 100 como parámetro y retorne la calificación como letra: 'A' (90-100), 'B' (80-89), 'C' (70-79), 'D' (60-69), 'F' (menos de 60) también modifica tu código de manera que pueda pasar todos los tests
 * 
 * gradeStudent(number)
 */
function gradeStudent(number){

}
