var mobileBtn = document.getElementById("header__mobile-btn");
var headerMenu = document.getElementById("header__menu");

mobileBtn.addEventListener("click", abrirMenu);
window.addEventListener("scroll", parallax);

function abrirMenu() {
   headerMenu.classList.toggle("header__menu--shown");
   headerMenu.addEventListener("click", function () {
      headerMenu.classList.remove("header__menu--shown");
   });
}

function parallax() {
   var position = window.scrollY * -1;
   var headerBackground = document.getElementById("header__bg");

   if (window.matchMedia("(min-width: 1800px)").matches) {
      headerBackground.style.backgroundPositionY = -240 + (position * 0.10) + "px";
   } else {
      headerBackground.style.backgroundPositionY = (position * 0.10) + "px";
   }
}
