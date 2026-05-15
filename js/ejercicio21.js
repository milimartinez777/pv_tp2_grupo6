import {cambiarCapital} from './funciones21.js';

document.addEventListener("DOMContentLoaded", () => {
    const selectPais = document.querySelector("#pais");

    if (selectPais) {
        
        selectPais.addEventListener("change", cambiarCapital);
        
    }
});
