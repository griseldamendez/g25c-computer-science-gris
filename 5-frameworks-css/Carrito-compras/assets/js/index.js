const productos= [
    {nombre: "jeans", precio: 400},
    {nombre: "camisa", precio: 700},
    {nombre: "lentes", precio: 200},
];
let carrito = []

let seleccion = prompt("Desea comprar algun producto si o no")
 while(seleccion != "si"&& seleccion !="no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Desea comprar algo si o no")
 }

 if(seleccion =="si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosproductos = productos.map((producto)=> producto.nombre + " " + 
    producto.precio + "$");
    alert(todoslosproductos.join("-"))

 }else if (seleccion == "no"){
   alert("Gracias por tu visita, hasta pronto!!")
 }

 while(seleccion != "no"){
   let producto = prompt("agrega un producto al carrito")
   let precio = 0

   if (producto =="jeans" || producto == "camisa " || producto == "lentes"){
      switch (producto){
         case "jeans":
            precio = 400;
            break;
            case "camisa ":
               precio = 700;
               break;
            case "lentes":
               precio = 200;
               break;
               default:
                  break;   
      }
      let unidades = parseInt(prompt("¿cuantas unidades quiere llevar?"))

      carrito.push({producto, unidades, precio})
      console.log(carrito)
   }else{
      alert("Producto no disponible")

   }
   seleccion = prompt("Desea segur comprando??")

   while(seleccion == "no"){
      alert("Gracias por tu compra! hasta pronto ")
      carrito.forEach(carritoFinal) => {
         console.log('producto: ${carritoFinal.producto}, unidades: ${carrito.unidades},
        

      }
      break;
   }
}
 