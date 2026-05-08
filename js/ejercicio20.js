import { guardarEstudianteEnArray, mostrarEstudiante } from "./funciones20.js";
// Esperar al DOM
document.addEventListener('DOMContentLoaded', () => {
   
    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');
    //const listaEstudiantes = [];
    console.log(formulario);
    // Capturar datos
     formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputLU = document.querySelector('#lu');

        const nombreVal = inputNombre.value;
        const apellidoVal = inputApellido.value;
        const luVal = inputLU.value;
    
        const estudiante = {
            id: Date.now(),
            nombre: nombreVal,
            apellido: apellidoVal,
            lu: luVal
        };

        // llamada al service
        guardarEstudianteEnArray(estudiante);      
        contenedorResultado.innerHTML = '';

        const ficha = mostrarEstudiante(nombreVal, apellidoVal, luVal);

       
        // 4. Agregar el elemento al DOM
        contenedorResultado.appendChild(ficha);
        alert(`Datos: ${nombreVal} ${apellidoVal}, LU: ${luVal}`);

         formulario.reset();
    });
});
