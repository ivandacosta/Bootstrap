const productos = [
    {
        "nombre": "Nike Air Max Az",
        "id" : 1,
        "price" : 30000,
        "img" : "../img/nikeaz.jfif"
    },
    {
        "nombre": "Nike Air Max Sc",
        "id" : 2,
        "price" : 23300,
        "img" : "../img/airsc.jfif"
    },
    {
        "nombre": "Nike Air Max Sc",
        "id" : 3,
        "price" : 23300,
        "img" : "../img/nikeairsc.jfif"
    },
    {
        "nombre": "Nike Force",
        "id" : 4,
        "price" : 20000,
        "img" : "../img/nikeforce.jfif"
    },
    {
        "nombre": "Puma Graviton Pro",
        "id" : 4,
        "price" : 17000,
        "img" : "../img/nikepro.jfif"
    },
    {
        "nombre": "Puma R78 Future",
        "id" : 4,
        "price" : 15500,
        "img" : "../img/nikefuture.jfif"
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