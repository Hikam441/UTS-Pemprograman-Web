window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const scrollTopBtn = document.querySelector('.scroll-top');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Scroll to Top visibility
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // --- Login Modal Functionality ---
        function openModal() {
            document.getElementById('login-modal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('login-modal').classList.remove('active');
        }

        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });

        // --- Hero Carousel Functionality ---
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const totalSlides = slides.length;

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                dots[index].classList.remove('active');
            });
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Auto-slide hero carousel every 5 seconds
        setInterval(nextSlide, 5000);
        
        // --- Testimonial Slider Functionality ---
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-slide');
        const totalTestimonials = testimonials.length;

        function updateTestimonial() {
            testimonials.forEach((t) => t.classList.remove('active'));
            testimonials[currentTestimonial].classList.add('active');
        }

        function changeTestimonial(direction) {
            currentTestimonial += direction;
            if (currentTestimonial >= totalTestimonials) {
                currentTestimonial = 0;
            } else if (currentTestimonial < 0) {
                currentTestimonial = totalTestimonials - 1;
            }
            updateTestimonial();
        }

        // Auto-change testimonial every 7 seconds
        setInterval(() => changeTestimonial(1), 7000);