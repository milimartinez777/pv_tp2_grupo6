let horas = 2;
let minutos = 30;

const conversionAsegundos = (horas, minutos) => (horas * 3600) + (minutos * 60);

let segundostotales = conversionAsegundos(horas, minutos);

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`El resultado de la conversión es: ${segundostotales}`);