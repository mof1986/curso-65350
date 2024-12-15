// function saludar () {
//     console.log("Hola coder!!")
// }

// saludar()

// FUNCION DECLARADA


// function sumar () {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA + numeroB
//     // console.log(resultado)

//     return resultado
// }
// sumar()
// console.log(sumar())
// let resultadoSuma = sumar()
// console.log("El resultado de la suma es: "+resultadoSuma)


// FUNCION EXPRESADA

// const restar = function () {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA - numeroB

//     return resultado
// }
// console.log (restar())


// let primerNumero = parseInt(prompt("Ingrese el primer numero"))
// let segundoNumero = parseInt(prompt("Ingrese el segundo numero"))

// function sumar (numeroA, numeroB) {
//     let resultado = numeroA + numeroB
//     console.log("El resultado de la suma es: "+resultado)
// }
// sumar(primerNumero, segundoNumero)


// FUNCIONES FLECHA

// const calculadoraDel10 = function (primerNumero) {
//     console.log(primerNumero*10)
// }

// const calculadoraDel10 = (primerNumero) => {
//     console.log(primerNumero*10)
// }

// const calculadoraDel10 = primerNumero => {
//     console.log(primerNumero*10)
// }

// let primerNumero = parseInt(prompt("Ingrese el primer numero "))
// let segundoNumero = parseInt(prompt("Ingrese el segundo numero"))

// const multiplicar = (numeroA, numeroB) => numeroA*numeroB
// console.log(multiplicar(primerNumero, segundoNumero))

// const calculadoraDel10 = primerNumero => primerNumero*10

// console.log(calculadoraDel10(primerNumero))


// //CALCULADORA PROPIA
// function sumar () { 
//     const numeroA = parseInt(prompt("Ingrese el primer numero"))
//     const numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     const resultado = numeroA + numeroB
//     alert(numeroA + " + " + numeroB + " = " +resultado)
// }

// function restar () {
//     const numeroA = parseInt(prompt("Ingrese el primer numero"))
//     const numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     const resultado = numeroA - numeroB
//     alert(numeroA + " - " + numeroB + " = " +resultado)
// }

// function multiplicar () {
//     const numeroA = parseInt(prompt("Ingrese el primer numero"))
//     const numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     const resultado = numeroA * numeroB
//     alert(numeroA + " x " + numeroB + " = " +resultado)
// }

// function dividir () {
//     const numeroA = parseInt(prompt("Ingrese el primer numero"))
//     const numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     const resultado = numeroA / numeroB
//     alert(numeroA + " / " + numeroB + " = " +resultado)
// }


// let opcion = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"));

// while(opcion !== 5) {
//     switch(opcion) {
//         case 1:
//             sumar()
//             break
//         case 2:
//             restar()
//             break
//         case 3:
//             multiplicar()
//             break
//         case 4: 
//             dividir()
//             break
//         default:
//             alert("Opcion incorrecta")
//     }
//     opcion = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))
// }

// alert("Finalizando programa, enter para cerrar")


//PRUEBA DE DEBUGGING
//Se te proporciona el siguiente código con errores:
// function suma(num1, num2) { 
//     let resultado = num1 + num2; 
//     return resultado;        //Se agrega esta linea y se saca jsx antes de la palabra reservada function
// } 
// console.log(suma(5, 3));

//Corrige los errores para que la función suma retorne correctamente el resultado y se imprima en la consola.

// Consigna: Analizaremos dos códigos para hallar el error que está causando un defecto.
// 1° Ejemplo: const IVA = 1.21; let importe = prompt(“Ingresa el importe sobre el cual quieres calcular el IVA:”);
// const precioConIVA = imp, iva => imp * iva; precioConIVA(importe, IVA)
// ¿Qué tiene que hacer este código? ¿Por qué no cumple con su función?

// const IVA = 1.21; 
// let precioConIVA = (imp, iva) => imp * iva; 
// let importe = parseInt (prompt("Ingresa el importe sobre el cual quieres calcular el IVA:")); //se corrigen comillas

// console.log("El precio final con IVA incluido es de "+precioConIVA(importe, IVA)); //sumo para visualizar en pantalla



// 2° Ejemplo:

// const valorM2 = 31.83; //valor fijo del seguro por Metro 2 const comision = 1.025; //comisión del 2.5% const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:"); const calcularPoliza = m2 => { M2 valorM2 comision }; const valorPoliza = calcularPoliza(120); console.log(“El costo de la póliza es: $”, valorPoliza);

// ¿Qué tiene que hacer este código? ¿Por qué no cumple con su función? ¿Qué propuesta podrías hacer para que tenga sentido su uso?

//RESOLUCION
// const valorM2 = 31.83; //valor fijo del seguro por Metro^2 
// const comision = 1.025; //comisión del 2.5% 
// const calcularPoliza = m2 => m2*valorM2*comision; //si estan las llaves, se deben especificar el return, por lo que las saqué.

// const M2 = parseFloat(prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:")); 
// const valorPoliza = calcularPoliza(M2); 
// console.log("El costo de la póliza es: $",  valorPoliza.toFixed(2)); //Add toFixed to 2 float values

// Actividad: Completa la función
// Consigna:
// Teniendo en cuenta el tema sobre sintaxis para la creación de funciones, vamos a aplicar los conocimientos adquiridos completando la siguiente función:
// sumar() {
// let numero1 = 5;
// let = numero1 + 5;
// resultado;
// }
// (sumar());
// Una vez completada tomala como base para crear una función flecha pero pasando los valores a sumar como parámetros en la función sumar.

//RESOLUCION
// function sumar() { //sumo reserved key "function"

//     let numero1 = 5;
    
//     let resultado = numero1 + 5; //asigno nombre variable resultado
    
//     console.log(resultado); // muestro en pantalla valor obtenido
    
//     }
    
//     sumar();

// //RESOLUCION 2
// sumar = (a,b) => a+b;

// let nroA=parseInt(prompt("Ingrese el primer valor a sumar: "));
// let nroB=parseInt(prompt("Ingrese el segundo valor a sumar: "));
// console.log("El resultado de la suma de",nroA," y de",nroB, "es: ",sumar(nroA,nroB)); //llevo todo a una sola linea si generacion de nueva variable. Dejo a continuacion otra forma de hacerlo pero con lineas separadas y uso de variable
// // let resultado=sumar(nroA,nroB);
// console.log("El resultado de la suma de",nroA," y de",nroB, "es: ", resultado);
