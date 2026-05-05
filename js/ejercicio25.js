import { accionCambio } from "./funciones25.js";
const botoncito=document.querySelector('#idBoton');
const fondo=document.querySelector('body');

const miCambio=()=>{
    accionCambio(fondo);
}

botoncito.addEventListener('click', miCambio);