let botones = [
    { texto: "Inicio", href: "index.html" },
    { texto: "Productos", href: "producto.html" },
    { texto: "Contacto", href: "#" } //agregar luego
];

const header = document.querySelector("header");

let menu = [];

for (let boton of botones) {
    menu.push(`<a class="nav-item" href="${boton.href}">${boton.texto}</a>`);
}

header.innerHTML = menu.join("").replaceAll(",", "");
