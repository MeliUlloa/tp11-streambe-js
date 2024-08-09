let autoRojo = document.querySelector("#autouno");
let autoAzul = document.querySelector("#autodos");

let acumulador1 = 0;
let acumulador2 = 0;

const pista = document.getElementById('pista');
const anchoPista = pista.offsetWidth;

// Ancho de los autos
const anchoAuto = autoRojo.offsetWidth;

window.addEventListener("keyup", (event) => {
    // console.log('Tecla presionada:', event.key);
    // Actualizar acumuladores basado en la tecla presionada
    if (event.key === 'a') {
        acumulador1++;
        autoRojo.style.marginLeft = acumulador1 + 'px';
        console.log('Acumulador 1:', acumulador1);
        if (acumulador1 + anchoAuto >= anchoPista) {
            pista.style.backgroundColor = 'red';
            alert('¡El auto rojo ha ganado la carrera!');
        }
    } else if (event.key === 'b') {
        acumulador2++;
        autoAzul.style.marginLeft = acumulador2 + 'px';
        console.log('Acumulador 2:', acumulador2);
        if (acumulador2 + anchoAuto >= anchoPista) {
            pista.style.backgroundColor = 'blue';
            alert('¡El auto azul ha ganado la carrera!');
        }

    }
});


