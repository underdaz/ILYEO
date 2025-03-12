// Detectar cuando la captura de pantalla es tomada (detectando cambios en la orientación)
let timeout;

window.addEventListener('orientationchange', function() {
    clearTimeout(timeout);

    // Mostrar la capa bloqueadora durante 3 segundos
    document.getElementById("screen-blocker").style.display = "block";
    timeout = setTimeout(function() {
        document.getElementById("screen-blocker").style.display = "none";
    }, 3000);
});

// Detectar la acción de captura de pantalla en dispositivos móviles
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        // Mostrar capa bloqueadora cuando la pantalla se vuelva oculta
        document.getElementById("screen-blocker").style.display = "block";
    } else {
        document.getElementById("screen-blocker").style.display = "none";
    }
});

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Detecta que la página ha perdido visibilidad (posiblemente por captura de pantalla)
        document.body.style.backgroundColor = 'black'; // Cambiar el fondo a negro
    } else {
        document.body.style.backgroundColor = ''; // Restaurar el fondo cuando la página se hace visible de nuevo
    }
});