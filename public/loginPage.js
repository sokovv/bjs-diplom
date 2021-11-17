"use strict";

const userform1 = new UserForm();

userform1.loginFormCallback = data => ApiConnector.login(data,  response => {
    if (response.success === false) {
        alert('Ошибка: Логин или пароль не существует');
    } else {
        location.reload();
    }
})

userform1.registerFormCallback = data => ApiConnector.register(data,  response => alert(JSON.stringify("Регистрация пользователя прошла успешно")))
