class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

let objeto = new Producto("Producto", "Detalle del producto", 100, 100, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

const etiquetasHTML = `
    <div class="card">
        <img src="${objeto.imagen}" class="card-img-top" alt="${objeto.titulo}">
        <div class="card-body">
            <h5 class="card-title">${objeto.titulo}</h5>
            <p class="card-text">${objeto.detalle}</p>
            <p class="card-text"><strong>Precio:</strong> $${objeto.precio}</p>
            <p class="card-text"><strong>Stock disponible:</strong> ${objeto.stock}</p>
        </div>
    </div>
    `;

const main = document.querySelector("main");
main.innerHTML = etiquetasHTML;
