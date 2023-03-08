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


// $('[data-modal="accept"]').on('click', function () {
//     $('.overlay, #thanks').fadeIn();
// });
// $('.modal__close').on('click', function () {
//     $('.overlay, #thanks').fadeOut();
// });


// $(document).ready(function(){
//     $('#contact-form form').validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//             messages: {
//                 name: {
//                     required:  "Пожалуйста, введите своё имя",
//                     minlength: jQuery.validator.format("Введите {0} символа!")
//                 },
//                 email: {
//                     required: "Пожалуйста, введите свою почту",
//                     email: "Неправильно ввведен адрес почты"
//                 },
//                 checkbox: {
//                     required: "Подтвердите Ваше согласие"
//                 }
    
//             },
//             checkbox: "required"
//         }
//     });
// });

//  / 

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});
$('.modal__close').on('click', function () {
    $('.overlay, #thanks').fadeOut();
});
