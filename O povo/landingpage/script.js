document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Funcionalidade de abrir/fechar o menu em dispositivos móveis
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Acessibilidade: Indica se o menu está aberto ou fechado para leitores de tela
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.header-container')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});