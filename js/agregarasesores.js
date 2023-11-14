document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnAgregar-form').addEventListener('click', function (event) {
        event.preventDefault();
        validarFormulario();
    });

    // Limpiar
    document.getElementById('btnClear-form').addEventListener('click', function (event) {
        event.preventDefault();
        limpiarFormulario();
    });

    function limpiarFormulario() {
        // Limpia formulario
        document.getElementById('formulario').reset();
        // Ocultar mensajes de validación
        document.getElementById('alertValidaciones').style.display = 'none';
        // Quitar clases de validación de Bootstrap
        document.getElementById('formulario').classList.remove('was-validated');
    }

    function validarFormulario() {
        // Nombre
        var nombre = document.getElementById('Name').value.trim();
        if (nombre === '') {
            mostrarError('Por favor, ingresa tu nombre.');
            return;
        }

        // Correo electrónico
        var email = document.getElementById('Email').value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Habilidad principal
        var habilidadPrincipal = document.querySelector('input[name="flexRadioDefault"]:checked');
        if (!habilidadPrincipal) {
            mostrarError('Por favor, selecciona una habilidad principal.');
            return;
        }

        // Habilidades adicionales
        var habilidadesAdicionales = document.querySelectorAll('input[id^="flexCheckCheckedAdicional"]:checked');
        if (habilidadesAdicionales.length === 0) {
            mostrarError('Por favor, selecciona al menos una habilidad adicional.');
            return;
        }

        // Horario
        var horarios = document.querySelectorAll('input[id^="flexCheckIndeterminateHorario"]:checked');
        if (horarios.length === 0) {
            mostrarError('Por favor, selecciona al menos un horario.');
            return;
        }

        // Precio
        var precio = document.querySelector('input[id^="flexCheckIndeterminatePrecio"]:checked');
        if (!precio) {
            mostrarError('Por favor, selecciona un precio.');
            return;
        }

        // Modal de éxito
        var myModal = new bootstrap.Modal(document.getElementById('formularioValidoModal'));
        myModal.show();
    }

    function mostrarError(mensaje) {
        var alerta = document.getElementById('alertValidaciones');
        var alertaTexto = document.getElementById('alertValidacionesTexto');
        alertaTexto.textContent = mensaje;
        alerta.style.display = 'block';
    }
});

// Cloudinary - imágenes
    var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dfzy1rq7e',
    uploadPreset: 'uw_test'
    }, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
    }
    }
    )

    document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
    }, false);
