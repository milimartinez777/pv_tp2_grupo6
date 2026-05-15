import { formatearMensaje } from './funciones24.js';

const radios = document.querySelectorAll('input[name="Materia"]');
const resu = document.getElementById("resu");

radios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        if (e.target.checked) {
            
            resu.textContent = formatearMensaje(e.target.value);
            
            console.log(`Seleccionaste: ${e.target.value}`);
        }
    });
});