document.addEventListener("DOMContentLoaded", () => {

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userEmail = localStorage.getItem("loggedInUserEmail");


    if (!userEmail) {
       
        window.location.href = "./PAGINA/index.html"; 
        return;
    }

    
    const currentUser = users.find(user => user.email === userEmail);

    if (currentUser) {

        document.getElementById("user-name").textContent = currentUser.nombre || 'Nombre no disponible';
        document.getElementById("user-email").textContent = currentUser.email || 'Email no disponible';
    } else {

        window.location.href = "./PAGINA/index.html"; 
    }

    document.getElementById("logout").addEventListener("click", () => {

        localStorage.removeItem("loggedInUserEmail");

        window.location.href = "../principal.html"; 
    });
});
