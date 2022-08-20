const productos = [
    {
        "nombre": "Buzo azul",
        "id" : 1,
        "price" : 25000,
        "img" : "../img/buzoazul.jfif"
    },
    {
        "nombre": "Buzo gris",
        "id" : 2,
        "price" : 30000,
        "img" : "../img/buzogris.jfif"
    },
    {
        "nombre": "Buzo Nike",
        "id" : 3,
        "price" : 40000,
        "img" : "../img/buzonike.jfif"
    },
    {
        "nombre": "Buzo Puma",
        "id" : 4,
        "price" : 35000,
        "img" : "../img/buzopuma.jfif"
    },
    {
        "nombre": "Buzo rojo",
        "id" : 4,
        "price" : 25000,
        "img" : "../img/buzorojo.jfif"
    },
    {
        "nombre": "Buzo rosa",
        "id" : 4,
        "price" : 30000,
        "img" : "../img/buzorosa.jfif"
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