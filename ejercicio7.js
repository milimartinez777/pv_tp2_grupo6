const nombres =["Sami","Victoria","Eva","Catalin","Felix","Jeremy"];
let nombremasLargo = nombres[0];
console.log (nombres);

nombres.forEach (nombre => {
if (nombre.length > nombremasLargo.length) {
    nombremasLargo=nombre
} 
})
console.log("El nombre mas largo es: " + nombremasLargo);