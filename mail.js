let nombre
do {
    nombre=prompt ("Ingrese su nombre / usuario")
    if(nombre ===""){
        alert("Es necesario ingresar un nombre");
    }
} while (nombre === "");
        alert("Bienvenid@" + nombre)

let Condicionfiscal;
do{
    Condicionfiscal =prompt("Consumidor final o mayorista").toLocaleLowerCase();
    if(condicionfiscal !=="Consumidorfinal" && condicionfiscal !=="Mayorista")
        alert("Opcion no valida, CF o Mayorista")
}
while (Condicionfiscal !== "CF" && condicionfiscal !=="Mayorista"); 


function listadeproductos() {
let opcion;
    do{
         opcion = parseInt(prompt("Menu:\n" + "1. CFoMayorista\n" + "2. EnviarLista\n" + "3.Gracias\n"))

        switch (opcion) {
             case 1:
                  alert("Queres la lista de precios CF o Mayorista");
                break;
            case 2: 
                  let correo = prompt ("Ingrese su correo electronico")  ;
                     if(correo ==="") { 
                alert("Campo obligatorio");
            } 
                 else{ 
                     enviarcorreo(corro, listadeproductos)
            }
                 break;

            case 3: 
                alert("Gracias por tu interes en nuestro productos");
                 break;
                default:
                  alert("Opcion no valida")


          }
    }while (opcion !== 3);

}

// primer pre entrega

alert("Bienvenidos a Tienda solcito");
let total =0;
let carrito =[]
const productos =[
{Tipo: 'vestido', producto: 'ropa', genero:'nena', precio: '3500'},

{ Tipo: 'short', producto:'ropa', genero:'nene-nena', precio: '4500'},

{ Tipo: 'remera', producto:'ropa', genero:'nene-nena', precio: '4500'},

{ Tipo:'pijama', producto:'ropadormir', genero:'nene-nena', producto: '5000'},


]

function agregarcarrito(producto){
    carrito.push(producto)
    total += producto.precio
    alert('${producto.tipo}')
}

function buscarPortipo() {
    const tipo =[...new set(productos.map(producto => producto.tipo))]
    const marcabuscada = Number(prompt(marcadisp))

if(marcabuscada>=1 && marcabuscada<= marcabuscada.length) { 
    const marcatipo = marca [marcabuscada -1]
;
    const productotipo = productos.filter (producto => producto.tipo === marcaelegida);
    mostrarresultados(productosTipo);

}  else { 
    alert("opcion no Valida. Ingrese un dato valido");
}

}