/**
 
 * @param {HTMLElement} elemento 
 * @param {string} nuevoTexto 
 */
export function modificarTexto(elemento, nuevoTexto) {
    if (elemento) {
        elemento.textContent = nuevoTexto;
    }
}