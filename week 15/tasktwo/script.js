"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

    }
});

function check() {
    let name = document.getElementById("firstName")
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("inputPassword5");

    document.getElementById('errorMessage').innerHTML = "";

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML += "Your name is not filled<br>";
    }

    if (email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Your email is not filled<br>";
    }

    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML += "Your password is not filled<br>";
    }

    if (password.value.length <= 8) {
        document.getElementById('errorMessage').innerHTML += "Your password must consist of 8 or more numbers and letters";
    } else {
        alert("Welcome!")
    }
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}