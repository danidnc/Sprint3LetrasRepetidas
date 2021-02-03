//EJERICIO 2
console.log("Ejercicio 2.");
const arrNombre = ['D', 'A', 'N', 'I', 'E', 'L']; //inicializa array con el nombre
let nombre = arrNombre.join(""); //asigna el valor del array en una variable, sin separadores
console.log("Partiremos del nombre : " + nombre); //imprime por consola el nombre a procesar
let letra;

for (i = 0; i < arrNombre.length; i++) { //bucle que imprime por consola posición y valor del array
    console.log(`Letra en posición ${i} -> ${arrNombre[i]}`)
    letra = arrNombre[i].toLowerCase(); //convierte el valor a minúsculas para reducir las condiciones a controlar en el IF
    if ((letra.charCodeAt() >= 48) && (letra.charCodeAt() <= 57)) { //controla que el unicode del valor esté entre 48 y 57, indicando que es un dígito
        console.log(`He econtrado el número ${letra}, los nombres no contienen números si no eres un Youtuber.`) //mensaje por consola si el valor es un número
    } else if ((letra.charCodeAt() == 97) || (letra.charCodeAt() == 101) || (letra.charCodeAt() == 105) || (letra.charCodeAt() == 111) || (letra.charCodeAt() == 117)) { //controla que la letra sea una vocal
        console.log(`He encontrado una vocal : ${arrNombre[i]}`); //imprime por consola que ha encontrado una vocal
    } else if ((letra.charCodeAt() > 96) && (letra.charCodeAt() < 123)) { //controla que el código unicode corresponda a una consonante minúscula
        console.log(`He encontrado una consonante : ${arrNombre[i]}`); //imprime el valor original
    }
}