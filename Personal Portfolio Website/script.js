
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
    }
});


const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
      
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project card functionality
projectCards.forEach(card => {
    // Handle click events
    card.addEventListener('click', function(e) {
        // Prevent triggering when clicking on the button itself
        if (e.target.classList.contains('project-link-btn')) {
            window.open('https://github.com/alanacharya1-sub', '_blank');
            return;
        }
        
        // Close all other cards
        projectCards.forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.classList.remove('active');
            }
        });
        
        // Toggle active class on the clicked card
        this.classList.toggle('active');
    });
    
    // Handle touch events for mobile
    card.addEventListener('touchstart', function(e) {
        // Prevent triggering when touching the button itself
        if (e.target.classList.contains('project-link-btn')) {
            window.open('https://github.com/alanacharya1-sub', '_blank');
            e.preventDefault();
            return;
        }
        
        // Close all other cards
        projectCards.forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.classList.remove('active');
            }
        });
        
        // Toggle active class on the touched card
        this.classList.toggle('active');
        e.preventDefault();
    });
    
    // Prevent hover from interfering with touch
    card.addEventListener('touchend', function(e) {
        e.preventDefault();
    });
});

// Close project cards when clicking elsewhere
document.addEventListener('click', function(e) {
    if (!e.target.closest('.project-card')) {
        projectCards.forEach(card => {
            card.classList.remove('active');
        });
    }
});

// Close project cards when touching elsewhere
document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('.project-card')) {
        projectCards.forEach(card => {
            card.classList.remove('active');
        });
    }
}, { passive: true });


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
       
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
      
        console.log('Form submitted:', { name, email, message });
        
        
        alert('Thank you for your message! I will get back to you soon.');
        
        
        contactForm.reset();
    });
}

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 50;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});


const skillBars = document.querySelectorAll('.progress-fill');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            section.classList.add('animate-on-scroll');
        }
    });
    
   
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('animate-on-scroll');
    });
    
    const skillItems = document.querySelectorAll('.skill-bar');
    skillItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('animate-on-scroll');
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});