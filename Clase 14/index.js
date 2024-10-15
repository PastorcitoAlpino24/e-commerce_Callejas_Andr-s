let lista = [];

let bool = true;

while(bool){
    let respuesta = prompt("¿Qué desea hacer? 1: Ver lista / 2: Agregar elemento / 3: Invertir lista / 4: Salir del programa");

    switch(respuesta){
        case "1": 
            if (lista.length == 0){
                alert("No hay nada en el array.")
            }
            else{
                alert(lista);
            }
            break;
        case "2":
            let elemento = prompt("Ingrese el elemento:");
            if (lista.includes(elemento)){
                alert("El elemento ya existe en el array.")
            }
            else{
                lista.push(elemento);
                alert("Se ingresó existosamente el elemento.")
            }
            break;
        case "3":
            let reverse = lista.reverse();
            alert(reverse);
            break;
        case "4":
            bool = false;
            break;
        default:
            alert("Ingrese un número válido.");
    }
}