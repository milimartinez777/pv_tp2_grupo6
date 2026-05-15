import { modificarTexto } from './funciones19.js';


const boton = document.getElementById('btn-cambiar');
const parrafo = document.getElementById('parrafo-dinamico');


boton.addEventListener('click', () => {
    const textoActualizado = "¡El texto ha sido cambiado exitosamente!";
    modificarTexto(parrafo, textoActualizado);
});