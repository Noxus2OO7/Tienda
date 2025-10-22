const tienda = [
    {
        nombre: "hollow knight",
        precio: 37500,
    },
    {
        nombre: "ULTRAKILL",
        precio: 58800,
    },
    {
        nombre: "DELTARUNE",
        precio: 58800
    },
    {
        nombre: "Project Zomboid",
        precio: 47500,
    },
    {
        nombre: "ARK: Survival Evolved",
        precio: 37500
    }
]

let carrito = []

const total = document.getElementById("cartTotal")
const carritoContenedor = document.getElementById("carritocomprar")
function actualizarCarrito(){
carritoContenedor.innerHTML =  ""

carrito.forEach((item) => {
    const itemContenedor = document.createElement("div")
    itemContenedor.className = "item"
    carritoContenedor.appendChild(itemContenedor)

    const itemInfo = document.createElement("div")
    itemContenedor.appendChild(itemInfo)

    const itemNombre = document.createElement("span")
    itemInfo.appendChild(itemNombre)
    itemNombre.textContent ="("+item.cantidad +")" + item.nombre;
    itemNombre.className = "Div"

    
    const itemPrecio = document.createElement("span")
    itemInfo.appendChild(itemPrecio)
    itemPrecio.textContent = item.precio + "$"
    
    const itemBoton = document.createElement("button")
    itemContenedor.appendChild(itemBoton)
    itemBoton.className = "boton"
    itemBoton.textContent = "Eliminar"

    itemBoton.addEventListener("click", () => {
        if(item.cantidad > 1){
            item.cantidad--;
        }else{
            carrito.splice(item, 1)
        }
        actualizarCarrito();
    })
   

    
})
//const CartTotal = document.getElementById("cartTotal")

let totalGeneral = 0;
carrito.forEach((item) => {
    totalGeneral+= item.precio*item.cantidad

})
total.textContent = totalGeneral + "$"
}



const tiendacontenedor = document.getElementById("shop");
tienda.forEach((item) => {
    console.log("shop;", item);

    const itemContenedor = document.createElement("div")
    itemContenedor.className = "item"
    tiendacontenedor.appendChild(itemContenedor)

    const itemInfo = document.createElement("div")
    itemContenedor.appendChild(itemInfo)

    const itemNombre = document.createElement("span")
    itemInfo.appendChild(itemNombre)
    itemNombre.textContent = item.nombre
    itemNombre.className = "Div"


    const itemPrecio = document.createElement("span")
    itemInfo.appendChild(itemPrecio)
    itemPrecio.textContent = item.precio + "$"

    const itemBoton = document.createElement("button")
    itemContenedor.appendChild(itemBoton)
    itemBoton.className = "boton"
    itemBoton.textContent = "Agregar"

    


    itemBoton.addEventListener("click", () => {
        const existe = carrito.find((elemento) => {
            return elemento.nombre == item.nombre
        })

        if (existe) {
            existe.cantidad++
        } else {

            carrito.push({
                nombre: item.nombre,
                precio: item.precio,
                cantidad: 1
            })
        }
        actualizarCarrito()
        console.log(carrito)
    })
})