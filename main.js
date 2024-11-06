const botonCalcular = document.getElementById('botonCalcular');
const textoResultado = document.getElementById('resultado');

function calcularPI(cantidadpuntos) {
    let puntosDentroDelCirculo = 0;

    for (let i = 0; i < cantidadpuntos; i++) {
        const x = Math.random();
        const y = Math.random();

        if (x * x + y * y <= 1) {
            puntosDentroDelCirculo++;
        }
    }

    const estimacionPI = (puntosDentroDelCirculo / cantidadpuntos) * 4;
    return estimacionPI;
}

botonCalcular.addEventListener('click', () => {
    const piEstimado = calcularPI(1000000); // Ejecutar la simulación con 1,000,000 puntos
    textoResultado.textContent = `Valor estimado de PI: ${piEstimado.toFixed(6)}`;
});
