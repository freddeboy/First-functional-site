document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var input = this.value.trim().toLowerCase();
        if (input === '') {
            // Handle empty input
            alert('Please enter a search term');
            return;
        }
        if (input.startsWith('http')) {
            // Properly encode URLs
            window.location.href = encodeURI(input);
        } else {
            switch(input) {
                case 'youtube':
                case 'youtub':
                case 'yout':
                case 'youtue':
                case 'yotube':
                    window.location.href = 'https://www.youtube.com';
                    break;
                case 'google':
                case 'googl':
                    window.location.href = 'https://www.google.com';
                    break;
                case 'anime lists':
                case 'anime rank':
                case 'anime ranking':
                case 'animeranking':
                case 'anime rankings':
                case 'animerankings':
                case 'anime':
                    window.location.href = 'Search-Links/Anime-Search/index.html';
                    break;
                case 'Cook':
                case 'Cookbook':
                case 'Cook book':
                    window.location.href = 'Search-Links/Cook_book.html';
                    break;

                case 'chatgpt':
                case 'chat gpt':
                case 'chat':
                case 'chat gp':
                case 'chat gtp':
                    window.location.href = 'https://chat.openai.com/';
                    break;
           


                default:
                    search(input);
                    break;
            }
        }
    }
});


function search(input) {
    var options = document.getElementById('searchList').options;
    for (var i = 0; i < options.length; i++) {
        if (options[i].value.toLowerCase() === input) {
            // Properly encode URLs
            window.location.href = encodeURI(options[i].value);
            return;
        }
    }
    // Handle case where no matches found
    alert('No matches found');
}


// Menu button
function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    menu.classList.toggle("show-menu");
    overlay.classList.toggle("show-overlay");
}
