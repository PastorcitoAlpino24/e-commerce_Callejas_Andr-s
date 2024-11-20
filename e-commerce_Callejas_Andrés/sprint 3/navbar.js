
const header = document.querySelector("header");

let botones = [
    { texto: "Inicio", href: "index.html" },
    { texto: "Productos", href: "producto.html" },
    { texto: "Contacto", href: "#" } // agregar luego
];

let menu = [];

for (let boton of botones) {
    menu.push(`<a class="nav-link text-light mx-2" href="${boton.href}">${boton.texto}</a>`);
}

//sesión
let navCode =
    `<nav class="navbar navbar-expand-lg fixed-top" style="background-color: #2c2c2c; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
            <div class="container-fluid d-flex">
                <a class="navbar-brand text-warning" href="#" style="font-family: 'Cinephile', sans-serif; font-size: 1.8rem;">
                    🎬 E-Commerce
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2 mx-auto">
                        ${menu.join("")}
                    </div>
                    <div class="navbar-nav ms-auto me-3 text-light">
                        ${localStorage.getItem("email")
        ? `<span class="text-light">${localStorage.getItem("email")}</span> | <span onclick="closeSession()" style="cursor:pointer;" class="text-warning">Cerrar sesión</span>  <span> | </span><li><img height="25" src="./cart.png" alt="Comprar" /><b>${localStorage.getItem( "quantity" )}</b></li><span></span>`
        : `<a href="login.html" class="text-decoration-none text-light">Iniciar sesión</a>`
    }
                    </div>
                </div>
            </div>
        </nav>`;

header.innerHTML = navCode;

function closeSession() {
    localStorage.clear();
    location.href = "./index.html";
};
