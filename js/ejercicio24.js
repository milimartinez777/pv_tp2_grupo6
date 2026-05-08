const numA = () => Math.floor(Math.random() * 256);

const colorA = () => {
    return `rgb(${numA()}, ${numA()}, ${numA()})`;
};

document.getElementById('CambioC').addEventListener('click', () => {

    const color = colorA();

    document.body.style.backgroundColor = color;

    console.log("El color de fondo cambió a:", color);

});
