const notas = [9, 5, 10, 7, 3, 8, 4, 2, 6, 9];

const mostrarnotas = () => {
    console.log(`Todas las notas:`);
    for (let i = 0; i < notas.length; i++) {
        console.log(`Nota ` + (i + 1) + `: ` + notas[i]);
    }
    console.log(`Notas que están aprobadas:`);
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 6) {
            console.log(`Nota ` + (i + 1) + `: ` + notas[i]);
        }
    }
    console.log(`Notas desaprobadas:`);
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 6) {
            console.log(`Nota ` + (i + 1) + `: ` + notas[i]);
        }
    }
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    let promedio = suma / notas.length;
    console.log(`El promedio es: ` + promedio);

    let cantidad_aprobados = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 6) {
            cantidad_aprobados = cantidad_aprobados + 1;
        }
    }
    console.log(`La cantidad de aprobados es: ` + cantidad_aprobados);
}
mostrarnotas();