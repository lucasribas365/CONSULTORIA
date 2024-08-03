const copyButton = document.getElementById('copy');
const link = 'https://chat.whatsapp.com/KwdPjTCGBaTLEzxJNbgwDD';

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(link)
    .then(() => {
      alert('Link copiado!');
    })
    .catch(err => {
      console.error('Erro ao copiar o link: ', err);
    });

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-h > li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(el => el.classList.remove('active'));
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
        });
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-h')) {
            menuItems.forEach(item => item.classList.remove('active'));
        }
    });
});
