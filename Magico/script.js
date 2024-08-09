//######################### <div> Mágico ################################

 const divmagico = document.getElementById("magia");
 const imagen = document.getElementById("gato");

 divmagico.addEventListener("mouseover",function(){
   imagen.style.display = 'none'; // Oculta la imagen
});
divmagico.addEventListener("mouseout", function() {
   imagen.style.display = 'block'; // Muestra la imagen
 });