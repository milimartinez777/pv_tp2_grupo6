
export const copiarTexto = (inputElement, outputElement) => {

    if (inputElement.value === "") {
        outputElement.textContent = "Esperando que escribas...";
    } else {
        outputElement.textContent = inputElement.value;
    }
};