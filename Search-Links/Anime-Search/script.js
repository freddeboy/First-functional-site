document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        row.addEventListener('click', function(event) {
            // Kontrollera om det klickade elementet är en länk
            if (event.target.tagName.toLowerCase() === 'a') {
                return; // Låt länken fungera normalt
            }

            // Stäng alla andra rader
            rows.forEach(r => {
                if (r !== row) {
                    r.classList.remove('expanded');
                }
            });

            // Växla den klickade raden
            this.classList.toggle('expanded');
        });

        // Förhindra dubbelklick från att markera text eller bild
        row.addEventListener('mousedown', function(event) {
            if (event.detail > 1) {
                event.preventDefault();
            }
        });
    });
});



function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("show-menu");
    overlay.classList.toggle("show-overlay");
}
