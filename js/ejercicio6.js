const edades = [4,6,9,12,16,23,25,29];

let i = 0;
let suma = 0;

while (i < edades.length){

    console.log("Edad: " + edades[i]);

    suma = suma + edades[i];

    i++;
}

let promedio = suma / edades.length;

console.log("El promedio de edades es: " + promedio);