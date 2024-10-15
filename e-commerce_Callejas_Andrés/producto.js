class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

let objeto = new Producto("producto", "detalle", 100, 100, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

const etiquetasHTML = `
    <div class="card">
        <img src="${productoSeleccionado.imagen}" class="card-img-top" alt="${productoSeleccionado.titulo}">
        <div class="card-body">
            <h5 class="card-title">${productoSeleccionado.titulo}</h5>
            <p class="card-text">${productoSeleccionado.detalle}</p>
            <p class="card-text"><strong>Precio:</strong> $${productoSeleccionado.precio}</p>
            <p class="card-text"><strong>Stock disponible:</strong> ${productoSeleccionado.stock}</p>
        </div>
    </div>
    `;


const main = document.querySelector("main");
main.innerHTML = etiquetasHTML;