//######################### Show Me The Money ################################

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");

// Event listeners para cada botón
 boton1.addEventListener("click", function() {
    imagen1.classList.toggle("oculto");
});

boton2.addEventListener("click", function() {
    imagen2.classList.toggle("oculto");
});

boton3.addEventListener("click", function() {
    imagen3.classList.toggle("oculto");
});

imagen1.addEventListener("click", function(){
    imagen1.classList.toggle("oculto");
});

imagen2.addEventListener("click", function(){
    imagen2.classList.toggle("oculto");
});

imagen3.addEventListener("click", function(){
    imagen3.classList.toggle("oculto");
});