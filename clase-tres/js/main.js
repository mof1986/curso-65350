const sumar = (nroA, nroB) => nroA+nroB;
const restar = (nroA, nroB) => nroA-nroB;
const multiplicar = (nroA, nroB) => nroA*nroB;
const dividir = (nroA, nroB) => nroA/nroB;

let resultado = 0;
let opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"));
let nroA = parseInt;(prompt("Ingrese el primer número: "));
let nroB = parseInt;(prompt("Ingrese el segundo número: "));

 while(opcion !== 5) {

    switch(opcion){
        case 1:
            resultado=sumar(nroA,nroB);
            break;
        case 2:
            resultado=restar(nroA,nroB);
            break;
        case 3:
            resultado=multiplicar(nroA,nroB);
            break;
        case 4:
            resultado=dividir(nroA,nroB);
            break;
        default:
            alert("Opción incorrecta");
    }
    alert("El resultado de la operación es: "+ resultado);
    opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"));
}
alert("Finalizando programa, enter para cerrar");