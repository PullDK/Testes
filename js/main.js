document.getElementById('sim-btn').addEventListener('click', function() {
    alert('Obrigado amor!');
});

document.getElementById('nao-btn').addEventListener('click', function() {
    // Gera uma posição aleatória
    const randomX = Math.random() * (window.innerWidth - 100); // 100 é a largura do botão
    const randomY = Math.random() * (window.innerHeight - 50); // 50 é a altura do botão

    // Define a nova posição
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
    
});
