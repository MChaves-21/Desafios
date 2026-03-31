// Inicialização do Swiper para o Elenco
const swiper = new Swiper('.cast-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    // CARROSSEL AUTOMÁTICO
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // Ajustes para diferentes telas
    breakpoints: {
        // Quando a tela for >= 640px
        640: {
            slidesPerView: 3,
        },
        // Quando a tela for >= 1024px
        1024: {
            slidesPerView: 6,
        }
    }
});

console.log("Interface Barbie carregada com sucesso!");