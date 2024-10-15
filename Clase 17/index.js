function construirHTML() {
  let elemento = prompt("Agrega un elemento");

  switch (elemento) {
     case "button":
        let button = document.createElement("input");
        let TextButton = prompt("Que texto le quiere agregar?");
        button.innerText = TextButton;
        document.body.append(button);
        break;
     case "input":
        let input = document.createElement("input");
        document.body.append(input);
        break;
     case "textarea":
        let textarea = document.createElement("textarea");
        document.body.append(textarea);
        break;
     case "h1":
        let h1 = document.createElement("h1");
        let textH1 = prompt("Que texto le quiere agregar?");
        h1.innerText = textH1;
        document.body.append(h1);
        break;
     case "p":
        let p = document.createElement("p");
        let textP = prompt("Que texto le quiere agregar?");
        p.innerText = textP;
        document.body.append(p);
        break;
     default:
        alert("Que haces sr guey");
    }
}
