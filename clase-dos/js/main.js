// let validar = true;
// if (validar) {
//     console.log("variable verdadera");
// }

let fruta = "sandia";
let mes = "febrero";
let edad = 18;

// if (fruta == "sandia") {
//   console.log("Felicitaciones, esatmos en el verano");
// } else if (fruta == "mandarina") {
//   console.log("me parece que es otoño");
// } else {
//   console.log("Puede ser cualquier otra fruta.");
// }

// OR ||

// if (fruta == "sandia" ||fruta== "melon") { //que no es lo mismo que fruta ==("sandia" || "melon")
//     console.log("efectivamente es verano");
// }

// AND &&
// if (fruta == "sandia" && mes == "enero"){
//     console.log("Fruta y mes veraniego");
// }

// if (edad >= 18) {
//     console.log("Sos mayor de edad, podes ingresar a la vinoteca");
// } else {
//     console.log("Sos menor, no se te puede vender alcohol");
// }

//ciclo FOR es un ciclo controlado

// for (let i=1; i<11; i++){
//     console.log(i);
// }

// let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desea:"));
// for (let i=1; i<=15;i++){
//     let resultado =i*numero;
//     console.log(numero+"x"+i+": "+resultado);
// }

// for (let i=10;i>=1;i--){
//      console.log(i);
//     if (i===0){
//         console.log("abortamos");
//         break;
//     }
//     if (i===1){
//         console.log("despegue");
//     }
// }

//Ciclos infinitos WHILE y DO WHILE

// let continuar = true;

// while(continuar) {
//     let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desea:"));
//     for (let i=1; i<=5;i++){
//     let resultado =i*numero;
//     console.log(numero+"x"+i+": "+resultado);
//     }
//     let confirmacion = prompt ("Desea hacer otro calculo? si/no");
//     if(confirmacion=="no") {
//         continuar=false;
//         console.log("Gracias");
//     }
// }

//switch case
let continuar = true;
while (continuar) {
  let menu = parseInt(
    prompt(
      "Ingrese 1 para ver su cuenta, 2 para extracciones, 3 para depositos, otro nro para salir"
    )
  );

  switch (menu) {
    case 1:
      console.log("Total de la cuenta: $3000");
      break;
    case 2:
      console.log("Limite de extraccion: $1000");
      break;
    case 3:
      console.log("Limite de deposito:$500");
      break;
    default:
      console.log("Retire su tarjeta.");
      break;
  }

  let confirmacion = prompt("Desea hacer algo mas? si/no");
  if (confirmacion == "no") {
    continuar = false;
    console.log("Gracias!");
  }
}
