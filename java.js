const tienda= [
    {
     nombre: "hollow knight",
     precio: 37.500,
    },
    {
        nombre: "ULTRAKILL",
        precio: 58.800,
    },
    {
        nombre: "DELTARUNE",
        precio: 58.800
    },
    {
nombre: "Project Zomboid",
precio: 47.500,
    },
    {
        nombre: "ARK: Survival Evolved",
        precio: 37.500
    }
]

const tiendacontenedor = document.getElementById(shop);
tienda.forEach((item) => {
    console.log("shop;", item);
    
const itemContenedor = document.createElement("div")
 tiendacontenedor.appendChild(itemContenedor)
    
    const itemNombre = document.createElement("span")
    itemContenedor.appendChild(itemNombre)
   itemNombre.textContent = item.nombre


   const itemPrecio = document.createElement("span")
   itemContenedor.appendChild(itemPrecio)
   itemPrecio.textContent = item.precio + "$"
    
   const itemBoton = document.createElement("button")
    itemContenedor.appendChild(itemBoton)
})