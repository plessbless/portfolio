$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adapptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/4/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/4/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal="consultation"]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_item').each(function(i) {
      $(this).on('click', function () {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn('slow');
      })
    }); 

    function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          name: "Введите своё имя",
          email: {
            required: "Введите Ваш email",
            email: "Неправильно введен адрес почты"
          },
          phone: "Введите Ваш номер телефона"
        }
      });
    }

    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#consultation-form');
    validateForms('#feed-form-modal');

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault;

      if(!$(this).valid()) {
        return;
      }

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();

        $('form').trigger('reset');
      });
      return false;
    });

    // Smooth scroll, pageup
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#up']").click(function (){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    })

    new WOW().init();
  });

 




































// number число
// string - "", '' строка
// boolean true/false 
// null не существующая
// undefined что-то существует, но значения не имеет

// let obj = {       Объект
//     name: 'apple',
//     color: 'green',
//     weight: 200
// } 
// Symbol

// alert() - метод
// console.log - команда вывода в консоль
// confirm("Вам есть 18?")
// prompt("Вам есть 18?") окно с вводом текстового сообщения от пользователя

// console.log(4 - 'asd') - NaN
// console.log(4 + 'asd') - 4asd (Конкатенация)

// && - и
// || - или

// if (2*4 == 8*1) {       Условия
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// for(let i = 1; i < 8; i++) {    Цикл
//     console.log(i);
// }

// function logging(a, b) {        Функции
//     console.log( a + b)
// }

// logging(3, 5);
// logging(6, 14);


