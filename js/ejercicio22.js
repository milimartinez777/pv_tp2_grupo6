import { copiarTexto } from './funciones22.js';

const cajaTexto = document.getElementById('inputTexto');
const areaDestino = document.getElementById('visualizador');

cajaTexto.addEventListener('input', () => {
    copiarTexto(cajaTexto, areaDestino);
});