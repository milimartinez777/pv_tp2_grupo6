const base=10;
const altura=5;
const calcArea=(b,h)=> b*h;
const calcPerimetro=(b,h)=>2*(b + h);
const area=calcArea(base,altura);
const perimetro=calcPerimetro(base,altura);

console.log(`Rectangulo de base: ${base}cm y altura: ${altura}cm`)
console.log(`Area: ${area}cm².`)
console.log(`Perimetro: ${perimetro}cm.`);