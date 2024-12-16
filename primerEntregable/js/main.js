// Array de productos con nombre y precio. Aca podriamos ampliar a mas atributos (kg, medidas, etc). Además, deberia tomarse de un archivo externo tipo Base de datos o planilla Excel
const productos = [
  { id: 1, nombre: "Cemento", precio: 500 },
  { id: 2, nombre: "Arena", precio: 300 },
  { id: 3, nombre: "Ladrillos", precio: 800 }
];

// Array Carrito para almacenar las selecciones del usuario
let carrito = []; 

//Funcion que enlista los productos y sus atributos
function pricingPrd() {
  let mensaje = "Listado de productos:\n";
  productos.forEach(prod => {
    mensaje += `${prod.id}. ${prod.nombre} - $${prod.precio}\n`;
  });
  return mensaje; // Retornamos el listado de productos como cadena de texto (string)
}

//funcion que agrega el producto al carrito, tomando su ID y Cantidad. Si ya existe, actualiza de acuerdo a ultimo valor que carga el usr
function agregarAlCarrito(idProducto, cantidad) {
  const producto = productos.find(prod => prod.id === idProducto); // Busca el producto por su id. Para mejorar, emitir advertencia si el ID no existe.

  //busca el producto que agregó el usr, si no existe en el carrito lo agrega. Si ya está, actualiza la cantidad
  if (producto) {
    const productoEnCarrito = carrito.find(item => item.producto === producto.nombre);    
    if (productoEnCarrito) {
      productoEnCarrito.cantidad = cantidad;
      productoEnCarrito.precioTotal = productoEnCarrito.cantidad * producto.precio;
      alert("Cantidad actualizada en el carrito.");
    } else {
            carrito.push({ producto: producto.nombre, cantidad, precioTotal: producto.precio * cantidad });
      alert("Producto agregado al carrito.");
    }
  }
}

function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let mensaje = "Productos en tu carrito:\n";
    let totalCompra = 0;
    carrito.forEach(item => {
      mensaje += `- ${item.cantidad} x ${item.producto} x $${item.precioTotal/item.cantidad} = $${item.precioTotal}\n`;
      totalCompra +=item.precioTotal;
    });
    mensaje += ("\nEl total a pagar será: $" +totalCompra);

    alert(mensaje);
  }
}

//funcion que muestra el menu raiz, con las opciones del simulador (por ahora, prd seleccionables, carrito y salir)
function menu() {
  let opcion;

  do {
    opcion = prompt("Menú de opciones:\n1. Elegir o Modificar Productos Seleccionados\n2. Ver Carrito\n3. Salir");

    switch (opcion) {
      case "1":
        let mensajeProductos = pricingPrd(); // Llamamos a la funcion que nos devolverá en string, el listado de productos y sus precios.
        let seleccion = parseInt(prompt(mensajeProductos + "\nIngrese opción a agregar (1, 2 o 3) o 0 (cero) para volver: \n(ACLARACIÓN: si ingresa otro valor, la información se desestimará):"));

        if (seleccion !== 0) {
          let cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado:"));
          agregarAlCarrito(seleccion, cantidad); // Guardar el producto en el carrito
        }
        break;

      case "2":
        verCarrito(); // Llamamos a la funcion que muestra los productos del carrito.
        break;

      case "3":
        alert("¡Gracias por utilizar el simulador!"); //Mensaje de despedida porque el usr selecciono salir.
        break;

      default:
        alert("Opción no válida."); //El usr indicó un valor no válido. Se vuelve a mostrar menú.
        break;
    }
  } while (opcion !== "3");
}


// Inicia el simulador
menu();