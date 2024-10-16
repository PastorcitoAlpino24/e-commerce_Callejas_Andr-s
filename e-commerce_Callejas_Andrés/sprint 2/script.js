const data = [
    { "id": 1, "title": "Gate of Flesh (Nikutai no mon)", "detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", "img": "http://dummyimage.com/165x100.png/dddddd/000000", "price": 6, "stock": 37 },
    { "id": 2, "title": "Robin Hood", "detail": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.", "img": "http://dummyimage.com/221x100.png/cc0000/ffffff", "price": 95, "stock": 50 },
    { "id": 3, "title": "Streaks, The (Pregi)", "detail": "Fusce consequat. Nulla nisl. Nunc nisl.", "img": "http://dummyimage.com/244x100.png/ff4444/ffffff", "price": 7, "stock": 41 },
    { "id": 4, "title": "Sea Hawk, The", "detail": "In quis justo. Maecenas rhoncus aliquam lacus.", "img": "http://dummyimage.com/120x100.png/dddddd/000000", "price": 33, "stock": 22 },
    { "id": 5, "title": "Four Sided Triangle", "detail": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi.", "img": "http://dummyimage.com/195x100.png/dddddd/000000", "price": 26, "stock": 86 },
    { "id": 6, "title": "Fantastic Night, The (Nuit fantastique, La)", "detail": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.", "img": "http://dummyimage.com/102x100.png/ff4444/ffffff", "price": 14, "stock": 54 },
    { "id": 7, "title": "Beau Brummel", "detail": "Fusce posuere felis sed lacus.", "img": "http://dummyimage.com/150x100.png/ff4444/ffffff", "price": 56, "stock": 63 },
    { "id": 8, "title": "Acacia", "detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", "img": "http://dummyimage.com/240x100.png/5fa2dd/ffffff", "price": 33, "stock": 32 },
    { "id": 9, "title": "Winchester '73", "detail": "Proin eu mi. Nulla ac enim.", "img": "http://dummyimage.com/242x100.png/5fa2dd/ffffff", "price": 36, "stock": 89 }
];

const section = document.querySelector("section");

let array = data.map(producto => `
    <div class="card-group">
        <div class="card">
            <img src="${producto.img}" class="card-img-top" alt="${producto.title}">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">${producto.detail}</p>
                <p class="card-text"><strong>Precio:</strong> $${producto.price}</p>
                <p class="card-text"><strong>Stock disponible:</strong> ${producto.stock}</p>
                <button class="btn btn-primary" onclick="location.href='producto.html?prod=${producto.id}';">Ver más</button>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Última actualización hace 3 minutos</small>
            </div>
        </div>
    </div>
`);

section.innerHTML = array.join("");
