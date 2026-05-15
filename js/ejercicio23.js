
import { reflejarTexto } from './funciones19.js';


const inputTexto = document.getElementById('texto-input');
const parrafoResultado = document.getElementById('resultado');


inputTexto.addEventListener('input', (evento) => {
    
    const textoIngresado = evento.target.value;
    
    
    reflejarTexto(textoIngresado, parrafoResultado);
});