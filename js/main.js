document.addEventListener('DOMContentLoaded', function() {
    // Define uma posição inicial para o botão "Não" quando a página for carregada
    document.documentElement.style.setProperty('--x', '0.6');
    document.documentElement.style.setProperty('--y', '0.12');
});

document.getElementById('sim-btn').addEventListener('click', function() {
    // Aguarda 5 segundos antes de redirecionar para a página do YouTube
    setTimeout(function() {
        window.location.href = 'https://www.youtube.com/watch?v=KDrJY481yDE';
    }, 5000); // 5000 milissegundos = 5 segundos
    alert('Obrigado amor!');
});

// Função para definir a posição aleatória do botão "Não" em dispositivos móveis
function definirPosicaoAleatoria() {
    // Gera uma nova posição aleatória
    const randomX = Math.random();
    const randomY = Math.random();

    // Define as variáveis CSS para a nova posição aleatória
    document.documentElement.style.setProperty('--x', randomX);
    document.documentElement.style.setProperty('--y', randomY);
}

// Verificando se o dispositivo é móvel
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Dispositivo móvel
    document.getElementById('nao-btn').addEventListener('click', definirPosicaoAleatoria);
} else {
    // Desktop
    document.getElementById('nao-btn').addEventListener('mouseover', function() {
        definirPosicaoAleatoria();
    });
}
