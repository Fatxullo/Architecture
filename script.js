var isOpen = false;

function toggleNavbar () {
    var navbarStayle = document.querySelector(".menu-burger").style;

    if (isOpen) {
        navbarStayle.right="-25vw"
    } else {
        navbarStayle.right="0vw"
    }

    isOpen = !isOpen;
}