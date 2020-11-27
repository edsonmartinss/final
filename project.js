const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuClosep = doc.querySelector(".close-p");
const menuCloses = doc.querySelector(".close-s");
const menuClosec = doc.querySelector(".close-c");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClosep.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloses.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClosec.addEventListener("click", () => {
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
