/**
 
 * @param {string} texto 
 * @param {HTMLElement} elementoDestino 
 */
export function reflejarTexto(texto, elementoDestino) {
    
    elementoDestino.textContent = texto;

   
    if (texto.length > 20) {
        elementoDestino.classList.remove('fondo-normal');
        elementoDestino.classList.add('fondo-alerta');
    } else {
        elementoDestino.classList.remove('fondo-alerta');
        elementoDestino.classList.add('fondo-normal');
    }
}