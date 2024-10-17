const data = [
    {"id":1,"title":"Myth of Fingerprints, The","detail":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","img":"http://dummyimage.com/184x100.png/ff4444/ffffff","price":84,"stock":53,"genres":"Comedy|Drama"},
    {"id":2,"title":"Malibu's Most Wanted","detail":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","img":"http://dummyimage.com/148x100.png/5fa2dd/ffffff","price":78,"stock":13,"genres":"Comedy|Crime"},
    {"id":3,"title":"Logan's Run","detail":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","img":"http://dummyimage.com/154x100.png/cc0000/ffffff","price":23,"stock":75,"genres":"Action|Adventure|Sci-Fi"},
    {"id":4,"title":"Twist","detail":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","img":"http://dummyimage.com/115x100.png/5fa2dd/ffffff","price":32,"stock":42,"genres":"Drama"},
    {"id":5,"title":"Storm Over Asia (Potomok Chingis-Khana)","detail":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","img":"http://dummyimage.com/222x100.png/ff4444/ffffff","price":47,"stock":52,"genres":"Drama|War"},
    {"id":6,"title":"Can't Buy Me Love","detail":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","img":"http://dummyimage.com/245x100.png/5fa2dd/ffffff","price":60,"stock":52,"genres":"Comedy|Romance"},
    {"id":7,"title":"It Should Happen to You","detail":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","img":"http://dummyimage.com/118x100.png/cc0000/ffffff","price":58,"stock":21,"genres":"Comedy|Romance"},
    {"id":8,"title":"Cinematographer Style","detail":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","img":"http://dummyimage.com/219x100.png/dddddd/000000","price":87,"stock":97,"genres":"Documentary"},
    {"id":9,"title":"Different from You and Me (Anders als du und ich) ","detail":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","img":"http://dummyimage.com/237x100.png/ff4444/ffffff","price":3,"stock":60,"genres":"Drama"}
];

const BuscarInput = document.getElementById("BuscarInput");
const BotonBuscar = document.getElementById("BotonBuscar");
const BotonLimpiar = document.getElementById("BotonLimpiar");
const BotonTodos = document.getElementById("BotonTodos");
const BotonComedia = document.getElementById("BotonComedia");
const BotonDrama = document.getElementById("BotonDrama");
const section = document.querySelector("section");

function mostrarProductos(productos) {
    const array = productos.map(producto => `
        <div class="card-group">
            <div class="card">
                <img src="${producto.img}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.detail}</p>
                    <p class="card-text"><strong>Precio:</strong> $${producto.price}</p>
                    <p class="card-text"><strong>Stock disponible:</strong> ${producto.stock}</p>
                    <p class="card-text"><strong>Género:</strong> ${producto.genres}</p>
                    <button class="btn btn-primary" onclick="location.href='producto.html?prod=${producto.id}';">Ver más</button>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </div>
            </div>
        </div>
    `);
    section.innerHTML = array.join("");
}

mostrarProductos(data);

function filtrarProductos() {
    const minusculas = BuscarInput.value.toLowerCase();
    const filterData = data.filter(producto => producto.title.toLowerCase().includes(minusculas));
    mostrarProductos(filterData);
}

BotonBuscar.addEventListener("click", filtrarProductos);

BotonLimpiar.addEventListener("click", () => {
    BuscarInput.value = ""; 
    mostrarProductos(data);
})

BotonTodos.addEventListener("click", () => {
    mostrarProductos(data);
})

BotonComedia.addEventListener("click", () => {
    const filteredComedy = data.filter(producto => producto.genres.toLowerCase().includes("comedy"));
    mostrarProductos(filteredComedy);
});

BotonDrama.addEventListener("click", () => {
    const filteredDrama = data.filter(producto => producto.genres.toLowerCase().includes("drama"));
    mostrarProductos(filteredDrama);
});
/*
function vermas() {
    const h1 = document.querySelector("h1");
    const section = document.querySelector("section");

    h1.innerText = "Productos";

    let array = [];

    for (let i = 1; i < 10; i++) {

        array.push(`<div class="card-group">
            <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title ${i}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button class="btn btn-primary" onclick="location.href='producto.html';">Ver más</button>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>`);
    }

    section.innerHTML = array.join("");
}

vermas();
*/