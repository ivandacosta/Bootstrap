const productos = [
    {
        "nombre": "Bermuda Blanca",
        "id" : 1,
        "price" : 10000,
        "img" : "../img/bermudablanca.jfif"
    },
    {
        "nombre": "Bermuda Ajustada",
        "id" : 2,
        "price" : 15000,
        "img" : "../img/bermudajustada.jfif"
    },
    {
        "nombre": "Bermuda Negra",
        "id" : 3,
        "price" : 9000,
        "img" : "../img/bermudanegra.jfif"
    },
    {
        "nombre": "Bermuda Azul",
        "id" : 4,
        "price" : 5000,
        "img" : "../img/bermudadeportiva.jfif"
    },
    {
        "nombre": "Nike Wooter",
        "id" : 4,
        "price" : 17000,
        "img" : "../img/nikeblack.jfif"
    },
    {
        "nombre": "Camiseta AFA",
        "id" : 4,
        "price" : 15500,
        "img" : "../img/camisetafa.jfif"
    },
]


const Addproductos = () => {
    for(const producto of productos){
        const div = document.createElement("div")
        const additems = document.querySelector(".produ-items")
        div.className = "card"

        div.innerHTML = `<img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.price}</p>
        <a href="#" class="btn btn-danger">Comprar</a>`
        
        additems.append(div)
    }

}



Addproductos();