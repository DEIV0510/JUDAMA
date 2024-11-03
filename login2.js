const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");
const formSignIn = document.querySelector('.sign-in');
const formSignUp = document.querySelector('.sign-up');
const containerWelcome = document.querySelector('.container-welcome');


btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
    containerWelcome.classList.add('hidden');
    formSignIn.classList.remove('hidden');
    formSignUp.classList.add('hidden');
});

btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
    containerWelcome.classList.add('hidden');
    formSignUp.classList.remove('hidden');
    formSignIn.classList.add('hidden');
});

function signUp(event) {
    event.preventDefault();
    const nombre = document.querySelector('.sign-up input[name="nombre"]').value;
    const email = document.querySelector('.sign-up input[name="email"]').value;
    const password = document.querySelector('.sign-up input[name="password"]').value;

    if (nombre && email && password) {
        const user = { nombre, email, password };
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro exitoso!');
        formSignUp.reset(); 
        container.classList.remove("toggle");
        formSignUp.classList.add('hidden');
        formSignIn.classList.remove('hidden');
    } else {
        alert('Por favor, complete todos los campos');
    }
}


function signIn(event) {
    event.preventDefault();
    const email = document.querySelector('.sign-in input[name="email"]').value;
    const password = document.querySelector('.sign-in input[name="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert('Inicio de sesión exitoso!');
        localStorage.setItem('loggedInUserEmail', email); 
        window.location.href = '../PAGINA/index.html'; 
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
}


formSignUp.addEventListener('submit', signUp);
formSignIn.addEventListener('submit', signIn);
