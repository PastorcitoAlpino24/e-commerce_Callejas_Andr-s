/* class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}
*/

//let objeto = new Producto("Producto", "Detalle del producto", 100, 100, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

const elemento = window.location.search.split("=")[1];

const data = [
    { "id": 1, "title": "Gate of Flesh (Nikutai no mon)", "detail": "Phasellus sit amet erat. Nulla tempus.", "img": "http://dummyimage.com/165x100.png/dddddd/000000", "price": 6, "stock": 37 },
    { "id": 2, "title": "Robin Hood", "detail": "Nullam sit amet turpis elementum ligula vehicula consequat.", "img": "http://dummyimage.com/221x100.png/cc0000/ffffff", "price": 95, "stock": 50 },
    { "id": 3, "title": "Streaks, The (Pregi)", "detail": "Fusce consequat. Nulla nisl. Nunc nisl.", "img": "http://dummyimage.com/244x100.png/ff4444/ffffff", "price": 7, "stock": 41 },
    { "id": 4, "title": "Sea Hawk, The", "detail": "In quis justo. Maecenas rhoncus aliquam lacus.", "img": "http://dummyimage.com/120x100.png/dddddd/000000", "price": 33, "stock": 22 },
    { "id": 5, "title": "Four Sided Triangle", "detail": "Duis bibendum, felis sed interdum venenatis.", "img": "http://dummyimage.com/195x100.png/dddddd/000000", "price": 26, "stock": 86 },
    { "id": 6, "title": "Fantastic Night, The (Nuit fantastique, La)", "detail": "Duis aliquam convallis nunc.", "img": "http://dummyimage.com/102x100.png/ff4444/ffffff", "price": 14, "stock": 54 },
    { "id": 7, "title": "Beau Brummel", "detail": "Fusce posuere felis sed lacus.", "img": "http://dummyimage.com/150x100.png/ff4444/ffffff", "price": 56, "stock": 63 },
    { "id": 8, "title": "Acacia", "detail": "Phasellus sit amet erat.", "img": "http://dummyimage.com/240x100.png/5fa2dd/ffffff", "price": 33, "stock": 32 },
    { "id": 9, "title": "Winchester '73", "detail": "Proin eu mi. Nulla ac enim.", "img": "http://dummyimage.com/242x100.png/5fa2dd/ffffff", "price": 36, "stock": 89 }
];

const productoFiltrado = data.find(producto => producto.id == elemento);

if (productoFiltrado) {
    const etiquetasHTML = `
        <div class="card">
            <img src="${productoFiltrado.img}" class="card-img-top" alt="${productoFiltrado.title}">
            <div class="card-body">
                <h5 class="card-title">${productoFiltrado.title}</h5>
                <p class="card-text">${productoFiltrado.detail}</p>
                <p class="card-text"><strong>Precio:</strong> $${productoFiltrado.price}</p>
                <p class="card-text"><strong>Stock disponible:</strong> ${productoFiltrado.stock}</p>
            </div>
        </div>
    `;

    const main = document.querySelector("main");
    main.innerHTML = etiquetasHTML;
    
} else {
    const main = document.querySelector("main");
    main.innerHTML = "<p>Producto no encontrado.</p>";
}
