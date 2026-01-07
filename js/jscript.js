document.addEventListener('DOMContentLoaded', () => {

    const images = [
        'img/bg1.jpeg',
        'img/bg2.jpeg',
        'img/bg3.jpeg',
        'img/bg4.jpeg',
        'img/bg5.jpeg'
    ];

    let current = 0;
    const slider = document.querySelector('.slider');

    if (!slider) return;

    // imagem inicial
    slider.style.backgroundImage = `url("${images[current]}")`;
    slider.style.opacity = 1;

    setInterval(() => {
        slider.style.opacity = 0;

        setTimeout(() => {
            current = (current + 1) % images.length;
            slider.style.backgroundImage = `url("${images[current]}")`;
            slider.style.opacity = 1;
        }, 1300);

    }, 7000);

});
