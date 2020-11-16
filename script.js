const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

$('nav a').click(function(e){
    e.preventDefault()

    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top

    $('html, body').animate({
        scrollTop: targetOffset - 80.5
    }, 500)
})

function on_discord(){
  document.getElementById('discord').src = "images/discord_hover.png"
}
function off_discord(){
  document.getElementById('discord').src = "images/discord.png"
}

function on_opgg(){
  document.getElementById('opgg').src = "images/opgg_hover.png"
}
function off_opgg(){
  document.getElementById('opgg').src = "images/opgg.png"
}

function on_spotify(){
  document.getElementById('spotify').src = "images/spotify_hover.png"
}
function off_spotify(){
  document.getElementById('spotify').src = "images/spotify.png"
}