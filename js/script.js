document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling para links de navegación interna ---
    const navLinks = document.querySelectorAll('nav a[href^="#"], a.cta-button[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            let targetId = this.getAttribute('href');
            // Asegurarse de que es un enlace interno válido
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                let targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault(); // Prevenir solo si el objetivo existe

                    // Calcular la posición del elemento restando la altura del header fijo (si existe)
                    const headerOffset = document.querySelector('.main-header')?.offsetHeight || 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Opcional: cerrar menú móvil si estuviera abierto
                }
            }
        });
    });

    // --- Feedback Básico para el Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir envío real por ahora

            // Simulación de envío
            formStatus.textContent = 'Enviando mensaje...';
            formStatus.style.color = 'var(--accent-color)';

            // Simular una respuesta después de un tiempo
            setTimeout(() => {
                // En una aplicación real, aquí verificarías la respuesta del servidor
                const simulatedSuccess = Math.random() > 0.1; // Simula 90% de éxito

                if (simulatedSuccess) {
                    formStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
                    formStatus.style.color = 'var(--success-color)';
                    contactForm.reset(); // Limpiar formulario
                } else {
                    formStatus.textContent = 'Error al enviar el mensaje. Inténtelo de nuevo más tarde.';
                    formStatus.style.color = 'var(--error-color)';
                }

                // Limpiar mensaje después de unos segundos
                 setTimeout(() => {
                     formStatus.textContent = '';
                 }, 5000);

            }, 1500); // Simula 1.5 segundos de espera
        });
    }

});