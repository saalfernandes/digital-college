// Função que simula o login e exibe o nome do usuário no painel
document.addEventListener('DOMContentLoaded', function() {
    // Nome do usuário simulado
    const nomeUsuario = 'Duda Fernandes';

    // Exibindo o nome do usuário na página
    document.getElementById('nomeUsuario').textContent = nomeUsuario;

    // Evento de logout (simulado)
    document.getElementById('logoutBtn').addEventListener('click', function() {
        alert('Você saiu do sistema!');
        // Aqui você pode redirecionar para a página de login, por exemplo:
        window.location.href = 'login.html';
    });
});
