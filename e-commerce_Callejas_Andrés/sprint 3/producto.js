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
    ${localStorage.getItem("email")
            ? `<div class="input-group">
                <button class="btn btn-danger" type="button" onclick="increaseItem()">+</button>
                <input type="number" class="form-control" value="1">
                <button class="btn btn-danger" type="button" onclick="decreaseItem()">-</button>
                <a href="#" class="btn btn-primary col-12" onclick="addItems()">Comprar</a>
           </div>`
            : '<a href="login.html"><button type="button" class="btn btn-primary btn-lg">Iniciar sesión para comprar</button></a>'}
`;

    //arreglar
    const main = document.querySelector("main");
    main.innerHTML = etiquetasHTML;

} else {
    const main = document.querySelector("main");
    main.innerHTML = "<p>Producto no encontrado.</p>";
}

const counter = document.querySelector("input");

function increaseItem() {
    const maxStock = productoFiltrado.stock;
    if (Number(counter.value) < maxStock) {
        counter.value = Number(counter.value) + 1;
    } else {
        alert("No puedes superar el stock disponible.");
    }
}


function decreaseItem() {
    if (Number(counter.value) > 1) { // La cantidad mínima ahora es 1
        counter.value = Number(counter.value) - 1;
    } else {
        alert("La cantidad mínima es 1.");
    }
}

function addItems() {
    function add() {
        const counter = document.querySelector("input");
        const cantidadSeleccionada = Number(counter.value);

        if (cantidadSeleccionada < 1) {
            alert("Debes agregar al menos 1 producto.");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const idProduct = Number(window.location.search.split("=")[1]);
        console.log("ID del producto obtenido:", idProduct);

        const product = data.find(item => item.id === idProduct);
        if (!product) {
            alert("El producto no existe en los datos cargados.");
            console.error(`Producto con ID ${idProduct} no encontrado en los datos.`);
            return;
        }

        const existingIdProduct = cart.some(item => item.product.id === idProduct);

        if (existingIdProduct) {
            cart = cart.map(item => {
                if (item.product.id === idProduct) {
                    return {
                        ...item,
                        quantity: item.quantity + cantidadSeleccionada,
                    };
                } else {
                    return item;
                }
            });
        } else {
            cart.push({ product: product, quantity: cantidadSeleccionada });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        let totalQuantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
        localStorage.setItem("quantity", totalQuantity);

        const quantityTag = document.querySelector("#quantity");
        if (quantityTag) {
            quantityTag.innerText = totalQuantity;
        }
    }

    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡Esto agregará productos al carrito!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, agregar!",
    }).then((result) => {
        if (result.isConfirmed) {
            add();
            Toastify({
                avatar: "https://clipart-library.com/images_k/success-transparent/success-transparent-3.png",
                text: "¡Producto/s agregado/s al carrito!",
                style: {
                    background: "#3cb869",
                    padding: "15px",
                },
            }).showToast();
        }
    });
}