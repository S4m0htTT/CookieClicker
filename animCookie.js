document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('cookie');

    if (img) {
        img.addEventListener('click', function() {
            img.style.transform = "translateZ(20px)";
            setTimeout(function() {
                img.style.transform = "translateZ(0px)";
            }, 150);
        });
    } else {
        console.error("L'élément avec l'ID 'cookie' n'existe pas.");
    }
});
