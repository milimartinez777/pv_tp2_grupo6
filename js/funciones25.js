export const accionCambio=(f)=>{

    const colorActual = f.style.backgroundColor;
    
    switch(colorActual){
        case 'red':
            f.style.backgroundColor = 'blue';
            console.log("Cambió a azul");
            break;
        case 'blue':
            f.style.backgroundColor = 'green'
            console.log("Cambió a verde");
            break;
        case 'green':
            f.style.backgroundColor = 'orange'
            console.log("Cambió a naranja");
            break;
        case 'orange':
            f.style.backgroundColor='yellow';
            console.log("Cambió a amarillo");
            break;
        default :
            f.style.backgroundColor = 'red';
            console.log("Cambió a rojo");
            break;
    }
}