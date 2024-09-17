let num = Number(prompt("Introduce un número del 1 al 3."));

const random = Math.floor(Math.random() * 3) + 1;

switch (num) {
    case random:
        alert("¡Adivinaste el número!");
        break;
    case 1:
        alert(`No acertaste. El número era ${random}.`);
        break;
    case 2:
        alert(`No acertaste. El número era ${random}.`);
        break;
    case 3:
        alert(`No acertaste. El número era ${random}.`);
        break;
    default:
        alert("No hagas trampa. Debes introducir un número entre 1 y 3.");
        break;
}