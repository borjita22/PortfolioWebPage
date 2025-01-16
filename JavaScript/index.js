

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    const style = document.createElement('style');

    if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') 
    {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        
    } 
    else 
    {
        mobileMenu.style.maxHeight = '0px';
        
    }

    hamburger.classList.toggle('open');
}

function handleResize() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth > 768) {
        mobileMenu.style.maxHeight = '0px';
    }
}

window.addEventListener('resize', handleResize);


document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('#hero-container h1');
    const containerWidth = heroHeading.parentElement.offsetWidth;
    const textWidth = heroHeading.scrollWidth;

    // Define la duración de la animación basada en el ancho del texto y del contenedor
    const animationDuration = (textWidth + containerWidth) / 200; // Ajusta el factor de escala según sea necesario

    // Crear un nombre único para la animación
    const animationName = 'marquee-' + Date.now();

    // Añadir la animación al CSS mediante JS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes ${animationName} {
            0% {
                transform: translateX(${containerWidth}px); /* Comienza el texto fuera del contenedor a la derecha */
            }
            100% {
                transform: translateX(-${containerWidth}px); /* Termina el texto fuera del contenedor a la izquierda */
            }
        }
    `;
    document.head.appendChild(style);

    // Aplicar el nombre único de la animación al texto
    heroHeading.style.animationName = animationName;
    heroHeading.style.animationDuration = `${animationDuration}s`;
    heroHeading.style.animationTimingFunction = 'linear'; // Asegura una velocidad constante
    heroHeading.style.animationIterationCount = 'infinite'; // Repetir la animación infinitamente

    heroHeading.offsetHeight;

    function restartAnimation() {
        heroHeading.style.animation = 'none'; // Elimina la animación
        heroHeading.offsetHeight; // Forza un reflujo para reiniciar la animación
        heroHeading.style.animation = `${animationName} ${animationDuration}s linear infinite`;
    }

    // Reiniciar la animación cada vez que termine el ciclo
    setInterval(restartAnimation, animationDuration * 1000);
});

function checkFooterVisibility() {
    const footer = document.getElementById('footer');
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    console.log('scrollTop:', scrollTop);
    console.log('viewportHeight:', viewportHeight);
    console.log('documentHeight:', documentHeight);

    // Verificar si se ha llegado al final del documento
    if (scrollTop + viewportHeight >= documentHeight - 100) {
        footer.style.opacity = 1; // Hacerlo visible
        footer.style.pointerEvents = 'auto';
    } else {
        footer.style.opacity = 0; // Ocultar el footer suavemente
        footer.style.pointerEvents = 'none';
        setTimeout(() => {
            footer.style.opacity = 0;
            
        }, 500); // Espera para la duración de la transición
    }
}

// Verificar la visibilidad del footer en el evento scroll
window.addEventListener('scroll', checkFooterVisibility);

// Verificar la visibilidad del footer al cargar la página
document.addEventListener('DOMContentLoaded', checkFooterVisibility);




  