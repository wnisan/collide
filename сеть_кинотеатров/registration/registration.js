function submitForm() {
 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Отправка данных на сервер:');
    console.log('Имя пользователя:', username);
    console.log('Email:', email);
    console.log('Пароль:', password);
}
function redirectToLogin() {
    window.location.href = "/main/main.html"; 
}
