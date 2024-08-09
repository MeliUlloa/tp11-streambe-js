// //####################### Beeper ##############################
 let boton = document.querySelector('#miBoton');

 // Definir la función callback fuera del evento
 function seEjecutaEnEvento() {
     // Crear un nodo de tipo elemento <p>
     let parrafo = document.createElement("p");
     // Insertar HTML interno en el párrafo
     parrafo.innerHTML = "<h2>BEEP</h2>";
    // Añadir el nodo <p> como hijo del body
    document.body.append(parrafo);
    // Toggle (alternar) la clase "color" en el cuerpo del documento
    document.body.classList.toggle("color");
}
// // Asignar la función callback al evento de clic del botón
boton.addEventListener('click', seEjecutaEnEvento);
