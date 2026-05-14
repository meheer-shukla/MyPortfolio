document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
        document.body.setAttribute("data-theme", "light");
    } else if (currentTheme == "dark") {
        document.body.removeAttribute("data-theme");
    } else if (!prefersDarkScheme.matches) {
        document.body.setAttribute("data-theme", "light");
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            let theme = "dark";
            if (document.body.getAttribute("data-theme") == "light") {
                document.body.removeAttribute("data-theme");
            } else {
                document.body.setAttribute("data-theme", "light");
                theme = "light";
            }
            localStorage.setItem("theme", theme);
        });
    }

    // Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .card');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Mobile Burger Menu Logic
    const burgerBtn = document.getElementById('burgerBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (burgerBtn && mobileMenu && closeMenuBtn) {
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Active Navigation Link Logic based on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Fade-in Animation on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('section > .container > *, .card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });

    // Contact Form Handling (Web3Forms)
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formResult = document.getElementById('formResult');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            submitBtn.textContent = 'Transmitting...';
            submitBtn.disabled = true;
            formResult.style.display = 'none';

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        formResult.textContent = 'Transmission Sent Successfully.';
                        formResult.style.color = 'var(--primary-blue)';
                        formResult.style.display = 'block';
                        contactForm.reset();
                    } else {
                        console.log(response);
                        formResult.textContent = json.message || 'Error sending transmission.';
                        formResult.style.color = '#ffb4ab';
                        formResult.style.display = 'block';
                    }
                })
                .catch(error => {
                    console.log(error);
                    formResult.textContent = 'System error. Please try again.';
                    formResult.style.color = '#ffb4ab';
                    formResult.style.display = 'block';
                })
                .then(function () {
                    submitBtn.textContent = 'Send Transmission';
                    submitBtn.disabled = false;
                    setTimeout(() => {
                        formResult.style.display = 'none';
                    }, 5000);
                });
        });
    }
});
