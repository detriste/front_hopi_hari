<<<<<<< HEAD
 // Verificar se há um usuário logado
 document.addEventListener('DOMContentLoaded', function() {
=======
document.addEventListener('DOMContentLoaded', function() {
>>>>>>> 21eaa9e3914bb1ba133ffff4a2bbdd7d89005812
    const userToken = JSON.parse(localStorage.getItem('token')) || {};
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    
    if (userToken.firstName) {
        document.getgokuElementById('user-name').textContent = `Olá, ${userData.firstName}!`;
        document.getElementById('user-email').textContent = userData.email;
    } else {
        // Redirecionar para a página de login se não houver usuário
        window.location.href = '../login/login.html';
    }
    
    // Botão de logout
    document.getElementById('logout-btn').addEventListener('click', function() {
<<<<<<< HEAD
        localStorage.removeItem('token'); // Remover dados do usuário do localStorage
        localStorage.removeItem('users');
        window.location.href = '/../login/login.html'; // Redirecionar para a página de login
=======
        localStorage.removeItem('token');
        window.location.href = '/';
>>>>>>> 21eaa9e3914bb1ba133ffff4a2bbdd7d89005812
    });
    
    // Toggle do menu lateral (para mobile)
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item (para mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                document.getElementById('sidebar').classList.remove('active');
            }
        });
    });
<<<<<<< HEAD
}); 

    window.addEventListener('DOMContentLoaded', () => {
        imageMapResize();
    });
=======
});

window.addEventListener('DOMContentLoaded', () => {
    imageMapResize();
});

>>>>>>> 21eaa9e3914bb1ba133ffff4a2bbdd7d89005812
<script src="https://cdn.jsdelivr.net/npm/image-map-resizer@1.0.10/js/imageMapResizer.min.js"></script>