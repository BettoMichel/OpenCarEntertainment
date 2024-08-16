document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("divPlaylist").style.display = "none";
    document.getElementById("divYoutube").style.display = "none";
    document.getElementById("divGPS").style.display = "none";

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/OpenCarEntertainment/sw.js', { scope: '/OpenCarEntertainment/' });
    }


    // Función para actualizar el estado de la conexión
    function updateOnlineStatus() {
        const statusElement = document.getElementById('status');
        if (navigator.onLine) {
            statusElement.textContent = "Estás en línea";
            statusElement.className = 'online';
        } else {
            statusElement.textContent = "Estás fuera de línea";
            statusElement.className = 'offline';
        }
    }

    // Escucha los eventos de cambio de estado de conexión
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Llama a la función al cargar la página
    updateOnlineStatus();
});


function Playlist_Show() {
    document.getElementById("divPlaylist").style.display = "";
    document.getElementById("divYoutube").style.display = "none";
    document.getElementById("divGPS").style.display = "none";
}
function Youtube_Show() {
    document.getElementById("divPlaylist").style.display = "none";
    document.getElementById("divYoutube").style.display = "";
    document.getElementById("divGPS").style.display = "none";
}
function GPS_Show() {
    document.getElementById("divPlaylist").style.display = "none";
    document.getElementById("divYoutube").style.display = "none";
    document.getElementById("divGPS").style.display = "";
}