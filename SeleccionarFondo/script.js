const input = document.getElementById("input");
 console.log (input);

 input.addEventListener("keyup", function(event) {
    // Si el usuario presiona Enter (código de la tecla 13)
    if (event.key === "Enter") {
        document.body.style.backgroundColor = input.value;
    }

    // Si el usuario presiona la tecla para borrar (código de la tecla 8 para Backspace)
    if (event.key === "Backspace") {
        document.body.style.backgroundColor = "white";
    }
});
