window.onscroll = function() {stickNav()};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

const stickNav = () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}