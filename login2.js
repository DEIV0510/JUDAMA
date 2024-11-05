
//Selecciona las variables que van a ser utilizadas en el codigo
const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");
const formSignIn = document.querySelector('.sign-in');
const formSignUp = document.querySelector('.sign-up');
const containerWelcome = document.querySelector('.container-welcome');

//Animaciones de pagina de inicio de sesion a pagina de registro 
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
//Seccion donde las personas se registran guardando la informacion en el LocalStorage
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

 //Vefica que los datos sean correctos lo lleva a la pagina principal de no ser asi sale un mensaje de alerta
function signIn(event) {
    event.preventDefault();
    const email = document.querySelector('.sign-in input[name="email"]').value;
    const password = document.querySelector('.sign-in input[name="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert('Inicio de sesión exitoso!');
        localStorage.setItem('loggedInUser Email', email);      
        window.location.href = './PAGINA/index.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
}

//Valida los botones de Inicio de Sesion y de registro 
formSignUp.addEventListener('submit', signUp);
formSignIn.addEventListener('submit', signIn);
