document.addEventListener("DOMContentLoaded", () => {
    // Recuperar usuarios del localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userEmail = localStorage.getItem("loggedInUserEmail");

    // Comprobar si hay un usuario autenticado
    if (!userEmail) {
        // Redirigir si no hay un email de usuario autenticado
        window.location.href = "./PAGINA/index.html"; // Cambia a la ruta de tu página de inicio
        return;
    }

    // Buscar el usuario actual
    const currentUser = users.find(user => user.email === userEmail);

    if (currentUser) {
        // Mostrar los detalles del usuario
        document.getElementById("user-name").textContent = currentUser.nombre || 'Nombre no disponible';
        document.getElementById("user-email").textContent = currentUser.email || 'Email no disponible';
    } else {
        // Redirigir si no se encuentra el usuario
        window.location.href = "./PAGINA/index.html"; // Cambia a la ruta de tu página de inicio
    }

    // Agregar el evento para el botón de cerrar sesión
    document.getElementById("logout").addEventListener("click", () => {
        // Eliminar el email del usuario logueado
        localStorage.removeItem("loggedInUserEmail");
        // Redirigir a otro índice
        window.location.href = "../principal.html"; // Cambia "otro-index.html" a la ruta deseada
    });
});
