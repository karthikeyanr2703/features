let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    btn.style.transform = "scale(0.9)";

    // Restore the size to 1 after 0.5 seconds
    setTimeout(function() {
        btn.style.transform = "scale(1)";
    }, 150);
});
