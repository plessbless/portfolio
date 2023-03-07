const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const promo = document.querySelector('.openModal'),
    promoMenu = document.querySelector('.promo-menu'),
    closeMenu = document.querySelector('.promo-menu__close');

promo.addEventListener('click', () => {
    promoMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    promoMenu.classList.remove('active');
});


const procents = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

procents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};