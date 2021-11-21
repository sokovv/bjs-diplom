"use strict";

const userform1 = new UserForm();

userform1.loginFormCallback = data => ApiConnector.login(data,  response => {
    if (response.success === false) {
        userform1.setLoginErrorMessage(response.error);
    } else {
        location.reload();
    }
})

userform1.registerFormCallback = data => ApiConnector.register(data,  response => {
    if (response.success === false) {
        userform1.setRegisterErrorMessage(response.error);
    } else {
        location.reload();
    }
})
