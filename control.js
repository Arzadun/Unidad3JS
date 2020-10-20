function validarUsuario(e) {
    let usuario = document.querySelector("#usuario");
    if (usuario.value == 0) {
        alert("Tienes que completar el campo Usuario");
    }
    if (usuario.value.match(/@/)) {
    } else {
        alert("El nombre de usuario debe contener @");
        e.preventDefault();
    }
}

function validarClave(e) {
    let clave = document.querySelector("#clave");
    if (clave.value == 0) {
        alert("Tienes que completar el campo Clave");
        e.preventDefault();
    }
}

function validar(e) {
    validarUsuario(e);
    validarClave(e);
}

const formulario = document.querySelector("form");
formulario.addEventListener("submit", validar);