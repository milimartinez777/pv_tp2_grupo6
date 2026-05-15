export const cambiarCapital = () => {

    const pais = document.querySelector("#pais");

    const capital = document.querySelector("#capital");


    capital.value = pais.value;


    console.log("País seleccionado: " + pais.options[pais.selectedIndex].text);

    console.log("Capital seleccionada: " + capital.value);
};