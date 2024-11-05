document.addEventListener("DOMContentLoaded", () => {
    try {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userEmail = localStorage.getItem("loggedInUser Email");

        // Verificación de sesión
        if (!userEmail) {
            window.location.href = "./PAGINA/index.html"; 
            return;
        }

        // Búsqueda del usuario actual
        const currentUser  = users.find(user => user.email === userEmail);
        if (currentUser ) {
            document.getElementById("user-name").textContent = currentUser .nombre || 'Nombre no disponible';
            document.getElementById("user-email").textContent = currentUser .email || 'Email no disponible';
        } else {
            window.location.href = "./PAGINA/index.html"; 
        }

        // Funcionalidad de cierre de sesión
        document.getElementById("logout").addEventListener("click", () => {
            if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
                localStorage.removeItem("loggedInUser Email");
                window.location.href = "../principal.html"; 
            }
        });

    } catch (error) {
        console.error("Error al cargar los usuarios:", error);
        window.location.href = "./PAGINA/index.html"; 
    }
});