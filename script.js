document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling & Active Nav Link ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');

    // Add smooth scrolling to all links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Adjust scroll position to account for sticky navbar
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.getElementById('navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 10;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        // Optional: highlight active nav link (can add CSS class for .active)
        // navLinks.forEach(link => {
        //     link.classList.remove('active');
        //     if (link.getAttribute('href').includes(current)) {
        //         link.classList.add('active');
        //     }
        // });
    });

    // --- Image Carousel ---
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function showSlides(n) {
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        
        // Hide all slides and remove active class from dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide and set dot to active
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    function nextSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        showSlides(slideIndex);
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
    }

    // Event Listeners for Carousel
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index);
        });
    });

    // Optional: Auto-play carousel
    // setInterval(nextSlide, 5000); // Change image every 5 seconds
});
