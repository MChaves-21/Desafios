// Inicializar Carrossel Swiper
const swiper = new Swiper('.cast-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 6, spaceBetween: 40 }
    }
});

// Mensagem de log para confirmar carregamento
console.log("Interface PlayCube - Barbie (2023) carregada!");