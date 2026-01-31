document.addEventListener('DOMContentLoaded', async () => {
  const images = ['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg','img/bg5.jpg'];
  const slider = document.querySelector('.slider');
  if (!slider) return;

  // Preload
  await Promise.all(images.map(src => new Promise(res => {
    const img = new Image();
    img.onload = res; img.onerror = res;
    img.src = src;
  })));

  let i = 0;
  slider.style.backgroundImage = `url("${images[i]}")`;
  slider.style.opacity = 1;

  setInterval(() => {
    slider.style.opacity = 0;
    setTimeout(() => {
      i = (i + 1) % images.length;
      slider.style.backgroundImage = `url("${images[i]}")`;
      slider.style.opacity = 1;
    }, 700);
  }, 6500);
});
