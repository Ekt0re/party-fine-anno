document.addEventListener('DOMContentLoaded', () => {
    // Riferimenti ai bottoni
    const btnQuinte = document.getElementById('btn-quinte');
    const btnQuarte = document.getElementById('btn-quarte');
    const btnGuest = document.getElementById('btn-guest');
    
    // Gestione pulsante scorrimento
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            // Scorre alla sezione info o alla prima sezione dopo l'header
            const targetSection = document.querySelector('.info') || document.querySelector('section');
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Animazione per l'entrata iniziale degli elementi
    animateOnScroll();
    
    // Effetto parallax per la locandina
    const locandina = document.querySelector('.locandina-img');
    if (locandina) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            locandina.style.transform = `translateY(${scrollPos * 0.05}px)`;
        });
    }
    
    // Effetto hover più semplice per i pulsanti, che non crea problemi
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // Rimuovo eventuali stili inline che potrebbero causare problemi
        button.removeAttribute('style');
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            // Rimuovo eventuali stili inline che potrebbero persistere
            setTimeout(() => {
                if (!button.matches(':hover')) {
                    button.style.transform = '';
                }
            }, 300);
        });
    });

    // Animazione dei badge più semplice
    const badges = document.querySelectorAll('.count-badge');
    badges.forEach(badge => {
        // Rimuovo eventuali stili inline che potrebbero causare problemi
        badge.removeAttribute('style');
    });

    // Effetto parallasse sul titolo
    document.addEventListener('mousemove', (e) => {
        const title = document.querySelector('.title');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        title.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Effetto neon lampeggiante sul titolo
    const title = document.querySelector('.title');
    setInterval(() => {
        title.style.textShadow = '0 0 10px rgba(0, 255, 133, 0.8), 0 0 20px rgba(0, 56, 255, 0.6)';
        
        setTimeout(() => {
            title.style.textShadow = '0 0 5px rgba(0, 255, 133, 0.3), 0 0 10px rgba(0, 56, 255, 0.2)';
        }, 100);
    }, 2000);
});

// Funzione per animare gli elementi quando entrano nel viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .feature, .btn, .locandina, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        // Imposta lo stato iniziale
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Osserva l'elemento
        observer.observe(element);
    });
} 