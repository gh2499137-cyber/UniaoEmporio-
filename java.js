// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica simples do Carrinho de Compras
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            // Incrementa o contador do carrinho
            cartCount++;
            cartCountElement.innerText = cartCount;

            // Pega o nome do produto a partir do card
            const produtoNome = e.target.parentElement.querySelector('h3').innerText;

            // Alerta visual de sucesso (pode ser substituído por um Toast/Notificação no futuro)
            alert(`${produtoNome} foi adicionado ao seu carrinho com sucesso!`);
        });
    });

    // Lógica para Rolagem Suave (Smooth Scroll) dos links da Navbar
    const linksMenu = document.querySelectorAll('.navbar nav ul li a');

    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // -60 para compensar a navbar fixa
                    behavior: 'smooth'
                });
            }
        });
    });
});