const menuLinks = document.querySelectorAll('.menu a');
const hamMenu= document.querySelector(".fa-bars");
const offScreenMenu= document.querySelector(".fa-xmark");
const menu = document.querySelector(".menu")

function setupMobileMenu() {
    if (window.innerWidth < 1100) {
        document.body.classList.remove("noScroll");
        hamMenu.addEventListener("click", openMenu);
        offScreenMenu.addEventListener("click", closeMenu);
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    } else {
        hamMenu.removeEventListener("click", openMenu);
        offScreenMenu.removeEventListener("click", closeMenu);
        menuLinks.forEach(link => {
            link.removeEventListener('click', closeMenu);
        });
        menu.classList.remove("active");
        hamMenu.classList.remove("hidden");
        offScreenMenu.classList.remove("active");
        document.body.classList.remove("noScroll");
    }
}

function openMenu() {
    menu.classList.toggle("active");
    hamMenu.classList.toggle("hidden");
    offScreenMenu.classList.toggle("active");
    document.body.classList.add("noScroll");
}

function closeMenu() {
    menu.classList.remove("active");
    hamMenu.classList.remove("hidden");
    offScreenMenu.classList.remove("active");
    document.body.classList.remove("noScroll");
}
window.addEventListener("load", setupMobileMenu);
window.addEventListener("resize", setupMobileMenu);

const courseList= document.querySelector(".courses")

const caretUp= document.querySelector(".fa-caret-up");

const caretDown= document.querySelector(".fa-caret-down");

caretDown.addEventListener("click",()=>{
    courseList.classList.toggle("active");
    caretDown.classList.toggle("hidden");
    caretUp.classList.toggle("active");
})
caretUp.addEventListener("click",()=>{
    courseList.classList.remove("active");
    caretDown.classList.remove("hidden");
    caretUp.classList.remove("active");
})