document.querySelector('.btn-login').addEventListener('click', function() {
    const email = document.querySelector('.input_email').value;
    const senha = document.querySelector('.input_senha').value;

    if (email === 'challenge@email.email' && senha === '123') {
        alert('Login realizado');
        window.location.href = 'content.html';
    } else {
        alert('Email ou senha incorretos');
    }
});
