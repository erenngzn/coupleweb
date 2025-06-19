
        // Floating Hearts Animation
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }

        // Create hearts periodically
        setInterval(createHeart, 2000);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe service cards
        document.querySelectorAll('.service-card, .template-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            observer.observe(card);
        });
    