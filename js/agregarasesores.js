document.addEventListener('DOMContentLoaded', function () {
    var imagenSubida = false;

    // Cloudinary - imágenes
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dfzy1rq7e',
        uploadPreset: 'uw_test'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);

            // Marcar que se ha subido la imagen
            imagenSubida = true;

            // Mostrar mensaje de éxito
            mostrarExitoImagen();
        }
    });

    document.getElementById("upload_widget").addEventListener("click", function () {
        myWidget.open();
    }, false);

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
        var precio = document.querySelector('input[id^="flexRadioDefaultPrecio"]:checked');
        if (!precio) {
            mostrarError('Por favor, selecciona un precio.');
            return;
        }

        // Imagen
        if (!imagenSubida) {
            mostrarError('Por favor, sube una imagen.');
            return;
        }

        // Modal de éxito formulario
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

// Función para mostrar una alerta de éxito al subir la imagen
function mostrarExitoImagen() {
    alert('Imagen subida exitosamente!');
    // Ocultar mensaje de error
    var alerta = document.getElementById('alertValidaciones');
    alerta.style.display = 'none';
}

    document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
    }, false);

    function validaHabilidad (id){
        let imputradio=document.getElementById("flexRadioDefault" + id);
        
        let imputcheked=document.getElementById("flexCheckCheckedAdicional" + id);
        imputcheked.disabled=imputradio.checked;
        
    }
