const targetColor = '#0061a8';  // Cambia este color según la página

window.onload = function() {
    // Definir el color objetivo para esta página (por ejemplo, azul)
    

    // Obtener el color guardado en localStorage
    let savedColor = localStorage.getItem('backgroundColor');

    if (savedColor) {
        // Aplicar inmediatamente el color guardado
        document.body.style.backgroundColor = savedColor;

        // Usar setTimeout para iniciar la transición al color objetivo
        setTimeout(() => {
            document.body.style.backgroundColor = targetColor;
        }, 0); // Inicio de la transición
    } else {
        // Si no hay color guardado, transicionar desde negro al color objetivo
        document.body.style.backgroundColor = targetColor;
    }

    // Guardar el color objetivo en localStorage para la próxima página
    saveColor(targetColor);
};

function saveColor(color) {
    localStorage.setItem('backgroundColor', color);
}


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = this.getAttribute('data-bgcolor');
    });

    item.addEventListener('mouseout', function() {
        document.body.style.backgroundColor = targetColor; // Regresa al color original
    });
});