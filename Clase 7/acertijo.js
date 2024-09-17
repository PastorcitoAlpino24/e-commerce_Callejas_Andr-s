let num = Number(prompt("Introduce un número del 1 al 3."));

const random = Math.floor(Math.random() * 3) + 1;

if (num === 1 || num === 2 || num === 3){
    if (num === random) {
        alert("¡Adivinaste el número!");
    } else {
        alert(`No acertaste. El número era ${random}.`);
    }
} else {
    alert("No hagas trampa. Debes introducir un número entre 1 y 3.");
}