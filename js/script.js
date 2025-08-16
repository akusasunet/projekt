document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement('script');
  script.src = "https://unpkg.com/scrollreveal";
  script.onload = () => {
    ScrollReveal().reveal('.image-sequence', {
      duration: 800,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out',
      afterReveal: (el) => {
        const images = JSON.parse(el.dataset.images);
        const img = document.createElement('img');
        img.src = images[0];
        img.alt = "スクロールで表示された画像";
        el.appendChild(img);

        setTimeout(() => {
          img.classList.add('revealed');
        }, 100);

        let index = 1;
        setInterval(() => {
          img.src = images[index];
          index = (index + 1) % images.length;
        }, 2000);
      }
    });
  };
  document.head.appendChild(script);
});
