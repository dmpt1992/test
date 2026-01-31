document.addEventListener('DOMContentLoaded', async () => {

    const images = [
        'img/bg1.jpg',
        'img/bg2.jpg',
        'img/bg3.jpg',
        'img/bg4.jpg',
        'img/bg5.jpg'
    ];

    const slider = document.querySelector('.slider');
    if (!slider) return;

    // Preload images
    await Promise.all(
        images.map(src => new Promise(resolve => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
        }))
    );

    let current = 0;
    slider.style.backgroundImage = `url("${images[current]}")`;

    setInterval(() => {
        slider.style.opacity = 0;

        setTimeout(() => {
            current = (current + 1) % images.length;
            slider.style.backgroundImage = `url("${images[current]}")`;
            slider.style.opacity = 1;
        }, 700);

    }, 6500);

});
