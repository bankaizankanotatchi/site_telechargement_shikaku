    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let index = 0;

    function update() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    next.onclick = () => { index = (index + 1) % slides.length; update(); };
    prev.onclick = () => { index = (index - 1 + slides.length) % slides.length; update(); };
    dots.forEach((dot, i) => dot.onclick = () => { index = i; update(); });

    setInterval(() => {
        index = (index + 1) % slides.length;
        update();
    }, 5000);

    document.getElementById('current-year').textContent = new Date().getFullYear();