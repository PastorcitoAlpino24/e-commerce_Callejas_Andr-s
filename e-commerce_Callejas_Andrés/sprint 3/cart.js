const cartSection = document.querySelector("#cart #cards");

function getCart(cards) {
    const list = cards.map(
        card => `
        <div class="card border shadow-none mb-2">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <div class="me-4">
                        <img src="${urlCars}${card.product.id}.jpg" class="img-fluid rounded-start" alt="${card.product.title}">
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                        <h5 class="text-truncate font-size-18">${card.product.title}</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <p class="text-muted mb-2">Precio</p>
                                <h5 class="mb-0 mt-2">$${card.product.price}</h5>
                            </div>
                            <div class="col-md-4">
                                <p class="text-muted mb-2">Cantidad</p>
                                <h5 class="mb-0 mt-2">${card.quantity}</h5>
                            </div>
                            <div class="col-md-3">
                                <p class="text-muted mb-2">Total</p>
                                <h5 class="mb-0 mt-2">$${card.product.price * card.quantity}</h5>
                            </div>
                            <div class="col-md-2">
                                <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    );

    cartSection.innerHTML = list.join("");
}

getCart(JSON.parse(localStorage.getItem("cart")));

function total(cards){
    let cartTotal = document.querySelector("#cart-total");

    let total =
        cards.length > 0
            ? cards.reduce(
                (acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0
            )
        : 0;
    cartTotal.innerText = "$" + total;
}

total(JSON.parse(localStorage.getItem("cart")));

function clearCart(){
    const quantityTag = document.querySelector("#quantity");
    localStorage.setItem("quantity", 0);
    quantityTag.innerText = "0";
    localStorage.setItem("cart", JSON.stringify([]));
    getCart([]);
    total([]);
}

function checkout(){
    const recurso = {
        user: localStorage.getItem("email"),
        items: JSON.parse(localStorage.getItem("cart")),
    };

    fetch("https://67367b22aafa2ef22230a09c.mockapi.io/orders/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recurso),
        })
            .then(response => {
                if (response.status !== 201) {
                    console.error("Error:", error);
                    Swal.fire({
                        text: "Oops... There was a problem. Please try again later.",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#333",
                    });
                } else {
                    return response.json()
                }
            })
            .then(order => {
                Swal.fire({
                    text: `Thank you ${order.user} for your purchase. We have registered your order #${order.id}`,
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#333",
                });
                clearCart();
            });
};