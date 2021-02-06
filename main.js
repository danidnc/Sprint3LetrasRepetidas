//EJERICIO 1 a 3
console.log("Ejercicio 3.");
const arrNombre = ['D', 'A', 'N', 'I', 'E', 'L', 'E', 'L']; //inicializa array con el nombre
let nombre = arrNombre.join(""); //asigna el valor del array en una variable, sin separadores
console.log("Partiremos del nombre : " + nombre); //imprime por consola el nombre a procesar
let letra; //variable que almacena valor del array en la iteración para evaluar Unicode en el ejercicio 2
let contador = 0; //variable que contará las veces que se repite un carácter en el ejercicio 3
let mapLetras = new Map; //Map que almacena cada carácter y el número de veces que aparece en el arrNombre

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
    arrNombre.filter(contarRepeticiones); //llamada al método filter para iterar por el array buscando coincidencia
    mapLetras.set(arrNombre[i], contador); //método set para insertar como llave la letra y como valor el contador de repeticiones
    contador = 0; //reinicializa el contador a 0 para estar lista en la nueva invocación al método filter
}

console.log("Este es el map resultante");
console.log(mapLetras); //imprime el map resultante

function contarRepeticiones(valor) { //función que repasa coincidencias en el array nombre
    if (valor.toLowerCase() == letra) { //compara el valor del array con la letra (var global) que contiene el valor evaluado en el bucle for inicial
        contador++; //incrementa el contador al haber encontrado coincidencia
    }
}

//EJERCICIO 4
let arrApellido = ['N', 'A', 'V', 'A', 'R', 'R', 'O']; //incializa array con el apellido
let arrFullName = arrNombre.concat(" ", arrApellido); //asigna al array fullname el valor de nombre concatenado con espacio y el apellido
console.log("El nombre completo es : " + arrFullName); //imprime en consola el array resultante de la concatenación


// EJERCICIO DE NIVEL 2
let str = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
//variable con el enunciado a filtar del ejercicio

let arrEmails = []; //array que almacenará los email encontrados
let expresion = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/gi; //variable con la expresión regular para encontrar emails

validarEmailFn(str); //invoca función donde filtra emails

function validarEmailFn(cadena) { //la funcion recibe el string a filtrar
    arrEmails = cadena.match(expresion); //invoca método match con la expresión regular como parámetro de búsqueda y guarda resultado en arrEmails
    arrEmails.forEach(borrarRepetidos); //itera el array eliminando emails repetidos
    arrEmails.forEach(mostrarEmails); //muestra por consola los emails que haya encontrado 
}

function mostrarEmails(valor) { //invocada mediante forEach para recorrer el array donde están almacenados los emails
    console.log("Email(s) encontrado en el string : " + valor); //imprime por consola los emails encontrados
}

function borrarRepetidos(valor, indice) { //invocada mediante forEach para recorrer el array donde están almacenados los emails
    if (valor == arrEmails[indice + 1]) { //si el elemento es igual al siguiente ->
        arrEmails.splice(indice + 1); //elimina la posición donde está el elemento repetido
    }
}