const targetColor = '#ffee99';

window.onload = function() {
    // Definir el color objetivo para esta página (por ejemplo, azul)
      // Cambia este color según la página

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

const button = document.getElementById('showCVbtn');

// Añade un manejador de eventos para el clic
button.addEventListener('click', toggleCV);

function toggleCV()
{
    const curriculum = document.getElementById('cv-document');
    if(curriculum.style.display === '')
    {
        curriculum.style.display = 'block'; 
        button.innerText = "Hide CV";
    }
    else
    {
        curriculum.style.display = ''; 
        button.innerText = "Show CV";
    }
}


if (window.innerWidth < 600) {
    console.log("Resolución móvil detectada");

    const gamesHardSlot = document.getElementById('games-hard');
    const webHardSlot = document.getElementById('web-hard');

    const softSkillSlots = document.querySelectorAll('.soft-skill');



    // Función que maneja el click
    const handleHardSlotClick = (event) => {
        event.preventDefault(); // Prevenir comportamiento táctil por defecto

        // Verificar el estado actual y alternar estilos
        if (event.currentTarget.style.borderRadius === '10px') {
            // Si es rectangular, vuelve a circular
            event.currentTarget.style.width = ''; // o el valor original
            event.currentTarget.style.height = ''; // o el valor original
            event.currentTarget.style.borderRadius = ''; // o el valor original
        } else {
            // Si es circular, cambia a rectangular
            event.currentTarget.style.width = '100%';
            event.currentTarget.style.height = '400px';
            event.currentTarget.style.borderRadius = '10px';
        }
    };

    const handleSoftSkillClick = (event) => {
        event.preventDefault(); // Prevenir comportamiento táctil por defecto
        console.log("Click en soft skill slot");
        // Verificar el estado actual y alternar estilos
        if (event.currentTarget.style.width === '70%') {

            event.currentTarget.style.width = '80%'; // Nuevo ancho

        } else {
            event.currentTarget.style.width = '70%'; // Ancho original
        }
    };

    

    // Agrega los listeners de click y touchstart a ambos elementos
    gamesHardSlot.addEventListener('click', handleHardSlotClick);
    gamesHardSlot.addEventListener('touchstart', handleHardSlotClick);

    webHardSlot.addEventListener('click', handleHardSlotClick);
    webHardSlot.addEventListener('touchstart', handleHardSlotClick);

     // Agregamos los listeners de click y touchstart a cada elemento
    softSkillSlots.forEach(slot => {
        slot.addEventListener('click', handleSoftSkillClick);
        slot.addEventListener('touchstart', handleSoftSkillClick);
    });




}





