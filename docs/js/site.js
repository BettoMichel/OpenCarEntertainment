document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("divPlaylist").style.display = "none";
    document.getElementById("divYoutube").style.display = "none";
    document.getElementById("divGPS").style.display = "none";

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/OpenCarEntertainment/sw.js', { scope: '/OpenCarEntertainment/' });
    }


    // Funci�n para actualizar el estado de la conexi�n
    function updateOnlineStatus() {
        const statusElement = document.getElementById('status');
        if (navigator.onLine) {
            statusElement.textContent = "Est�s en l�nea";
            statusElement.className = 'online';
        } else {
            statusElement.textContent = "Est�s fuera de l�nea";
            statusElement.className = 'offline';
        }
    }

    // Escucha los eventos de cambio de estado de conexi�n
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Llama a la funci�n al cargar la p�gina
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