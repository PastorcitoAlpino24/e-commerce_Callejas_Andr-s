const sessionAccount = {
    email: "luckytroll@hotmail.com",
    password: "furby"
}

const form = document.querySelector("form");

// console.dir(form.elements.email);

form.addEventListener ("submit",  (event) => {
    event.preventDefault();
    let psswd = form.elements.password.value; //value = name del input
    let email = form.elements.email.value;

    if (sessionAccount.email === email && sessionAccount.password === psswd){
        window.location.href = "./index.html";
        localStorage.setItem("email", email);
    } else{
        alert("Datos incorrectos");
        form.elements.password.value = "";
        form.elements.email.value = "";
    }
});

//logged 
const isAuthRedirectHome = ()  => {
    if (localStorage.getItem("email")) {
        location.href = "./index.html"
    }
};

isAuthRedirectHome();