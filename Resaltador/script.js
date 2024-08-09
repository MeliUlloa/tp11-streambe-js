//###################### Resaltador ############################

// //modifico todo el contenido dentro del div, reemplazando todo lo que tiene con lo nuevo.
let parrafos = document.querySelectorAll('p');
console.log(parrafos);

for (let i = 0; i < parrafos.length; i++) {
   console.log(parrafos[i])


   parrafos[i].addEventListener("click", function () {
      console.log("Alguien hizo click en un parrafo");
      this.classList.toggle("resaltado");
   });
}