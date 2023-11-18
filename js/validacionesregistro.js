const formulario = document.getElementById("formulario__register");
const inputs = document.querySelectorAll("#formulario__register, #formulario__login input");

const formulario__login = document.getElementById("formulario__login");


const expresiones = {
    usuario:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo, números, letras, arroba, guión bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guiones.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^(?!.*(\d)\1{4})\d{10}$/,
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');


    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los datos actuales del localStorage
    let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si los campos son válidos antes de continuar
    if (campos.nombre && campos.password && campos.correo && campos.telefono) {
        // Obtener los valores del formulario
        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;
        let correo = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;

        // Crear un nuevo usuario
        let nuevoUsuario = {
            nombre,
            password,
            correo,
            telefono
        };

        // Agregar el nuevo usuario a la lista
        usuariosGuardados.push(nuevoUsuario);

        // Guardar la lista actualizada en el localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

        // Restablecer el formulario
        formulario.reset();

        // Mostrar un mensaje de registro exitoso
        alert("Registrado correctamente");

        // Limpiar las clases de validación en los grupos correctos
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        // Si los campos no son válidos, mostrar un mensaje de error
        formulario.classList.add('formulario__mensaje-activo');
    }
});

//Inicio de Sesión

formulario_login.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los datos actuales del localStorage
    let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Obtener los valores del formulario
    let correo = document.getElementById("usuario").value;
    let password = document.getElementById("password_login").value;

    // Verificar si el usuario y la contraseña coinciden con los datos almacenados
    let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.correo === correo && usuario.password === password);

    if (usuarioEncontrado) {
        // Si las credenciales son correctas
        formulario_login.reset();
        alert("Login exitoso");//TODO: cambiar alert por algo más
        // Redirigir o realizar otras acciones necesarias para un inicio de sesión exitoso
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
        //TODO: Agregar interacción o interfaz de perfil y cierre de sesión
        //TODO: Agregar botón de cierre de sesión
        window.location = 'index.html';
        // Agregar botón de cerrar sesión si es necesario
    } else if (usuariosGuardados.some(usuario => usuario.correo === correo)) {
        // Si el correo es correcto pero la contraseña es incorrecta
        alert("Contraseña incorrecta. Por favor, vuelva a intentar.");
    } else {
        // Si el usuario no está registrado
        alert("Usuario no encontrado. Por favor, regístrese.");
        // Redirigir o realizar otras acciones necesarias para el caso de un usuario no registrado
    }
});

//TODO: Agregar botón de cierre de sesión: Resetear todo 
//TODO: Construir interfaz de perfil de usuario tras log in (Figma: Perfil logeado)