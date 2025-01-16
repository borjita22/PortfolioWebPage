document.addEventListener("DOMContentLoaded", function() {
    const enginesContainer = document.getElementById('engines-container');
    const engineSlots = document.querySelectorAll('.engine-slot');
    let moving = true;
    let position = 0;
    let direction = 1;

    function moveContainer() {
        const containerWidth = enginesContainer.offsetWidth;
    const parentWidth = enginesContainer.parentElement.offsetWidth;
    const speed = 0.25;

    // Detecta si el ancho de la pantalla es menor que 768px (ajustable)
    if (window.innerWidth <= 768) {
        // Reiniciar posición a 0 en versión móvil
        position = 0;
        enginesContainer.style.transform = `translateX(0px)`;
    } else {
        // Continuar con la animación en versión de escritorio
        if (moving) {
            if (position + containerWidth > parentWidth || position < 0) {
                direction *= -1;
            }

            position += direction * speed;
            enginesContainer.style.transform = `translateX(${position}px)`;
        }
    }

        requestAnimationFrame(moveContainer);
    }

    engineSlots.forEach(slot => {
        slot.addEventListener('mouseenter', () => moving = false);
        slot.addEventListener('mouseleave', () => moving = true);
    });

    // Verificar la media query inicial
    function checkMediaQuery() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            requestAnimationFrame(moveContainer);
        }
        if(window.matchMedia("(max-width: 768px)").matches)
        {
            requestAnimationFrame(stopContainerMovement);
        }
    }

    function stopContainerMovement()
    {
        moving = false;
    }

    checkMediaQuery();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', checkMediaQuery);
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const container = document.getElementById('projects-container');
    const slides = document.querySelectorAll('.project-slot');
    let currentIndex = 0;

    function updateSlide() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);
});






const targetColor = '#ff5941';  // Cambia este color según la página

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


//functions for responsive behavior on mobile devices

if (window.innerWidth < 600)
{
    const handleTextSlotClick = (event) =>
    {
        console.log("Click en text slot");

        const textElement = event.currentTarget;

        textElement.style.backgroundColor = 'whitesmoke';
        textElement.style.height = '175px';
        textElement.style.transition = '0.5s'; // Añadir la transición cuando se aplique el estilo

    };

    const textElements = document.querySelectorAll('.text');
    textElements.forEach(element => {
        element.addEventListener('click', handleTextSlotClick);
        element.addEventListener('touchstart', handleTextSlotClick);
    });

    const arrow = document.getElementById('next-framework-arrow');

    window.addEventListener('scroll', function () {
        const firstSlot = document.querySelector('.knowledge-slot'); // El primer elemento
        const rect = firstSlot.getBoundingClientRect();

        // Ocultamos la flecha si el primer elemento está visible completamente en pantalla
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            arrow.classList.remove('hidden');
        } else {
            arrow.classList.add('hidden');
        }
    });
}




