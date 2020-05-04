/*----------------------------------------------
*
* [Main Scripts]
*<!-- Página desarrollada  por fullstack marketing cireña webs, subida y alojada en github para que los desarrolladores puedan ver el codigo y usarlo para test. En FSM ayudamos los jóvenes que van empezando. Siguenos en Facebook: https://www.facebook.com/fullstackmkt/ y github como:https://github.com/mktfullstack-->-----*/

/*----------------------------------------------

[ALL CONTENTS]

1. Responsive Menu
2. Navigation 
3. Slides 
4. Gallery
5. Sign and Register Form
6. Multi-Step Form 
7. Submission Parameters 

----------------------------------------------*/

/*----------------------------------------------
1. Responsive Menu
----------------------------------------------*/

$(function () {

    'use strict';

    $(window).on('resize', function () {
        navResponsive();
    })

    $(document).on('click', '#menu .nav-item a', function () {

        $('#menu').modal('hide');
    })

    function navResponsive() {

        let navbar = $('.navbar .items');
        let menu = $('#menu .items');

        menu.html('');

        navbar.clone().appendTo(menu);
    }

    navResponsive();
})

/*----------------------------------------------
2. Navigation
----------------------------------------------*/

$(function () {

    'use strict';

    var position = $(window).scrollTop();
    var toTop = $('#scroll-to-top');

    toTop.hide();

    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let navbar = $('.navbar');

        if (!navbar.hasClass('relative')) {

            if (scroll > position) {

                if (window.screen.width >= 767) {

                    navbar.fadeOut('fast');

                } else {

                    navbar.addClass('navbar-sticky');
                }

                toTop.fadeOut('fast');

            } else {

                if (position < 76) {

                    navbar.slideDown('fast').removeClass('navbar-sticky');

                } else {

                    navbar.slideDown('fast').addClass('navbar-sticky');
                }


                if (position > 1023) {

                    if (window.screen.width >= 767) {

                        toTop.fadeIn('fast');
                    }

                } else {

                    toTop.fadeOut('fast');

                }

            }

            position = scroll;

        }
    })

    $(document).on('click', '.smoth-anchor', function (event) {

        event.preventDefault();

        $('html, body').animate({

            scrollTop: $($.attr(this, 'href')).offset().top

        }, 500);
    })

    $('.dropdown-menu').each(function () {

        let dropdown = $(this);

        dropdown.hover(function () {

            dropdown.parent().find('.nav-link').first().addClass('effect-motion-text');

        }, function () {

            dropdown.parent().find('.nav-link').first().removeClass('effect-motion-text');

        })
    })
})

/*----------------------------------------------
3. Slides
----------------------------------------------*/

$(function () {

    'use strict';

    var animation = (slider) => {

        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .btn');
        let nav = $(slider + ' nav');

        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');
        nav.toggleClass('aos-animate');

        setTimeout(() => {

            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');

            AOS.refresh();

        }, 100)

        if ($('.slider-full').hasClass('animation')) {

            $('.left').addClass('off');
            $('.left').removeClass('init');

            setTimeout(() => {

                $('.left').removeClass('off');

            }, 200)

            setTimeout(() => {

                $('.left').addClass('init');

            }, 1000)

        } else {

            $('.left').addClass('init');
        }
    }

    var sliderFull = new Swiper('.slider-full', {

        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        on: {
            init: () => {

                animation('.slider-full')

                let pagination = $('.slider-full .swiper-pagination');

                pagination.hide();

                setTimeout(() => {

                    pagination.show();

                }, 2000)

            },
            slideChange: () => {

                animation('.slider-full')
            }
        }
    })

    var sliderMid = new Swiper('.slider-mid', {

        autoplay: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1023: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    var sliderMin = new Swiper('.slider-min', {

        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            424: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1023: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        },
        pagination: false,
    })

    var sliderDisabled = new Swiper('.slider-disabled', {

        autoplay: false,
        loop: false,
        keyboard: false,
        grabCursor: false,
        allowTouchMove: false,
        on: {
            init: () => {
                animation('.slider-disabled')
            }
        }
    })
})

/*----------------------------------------------
4. Gallery
----------------------------------------------*/

$(function () {

    'use strict';

    $('.gallery').lightGallery({
        thumbnail: false,
        share: false
    })
})

/*----------------------------------------------
5. Sign and Register Form
----------------------------------------------*/

$(document).on('click', 'a[data-target="#register"]', function() { 

    $('#sign').modal('hide');
})

$(document).on('click', 'a[data-target="#sign"]', function() { 

    $('#register').modal('hide');
})

/*----------------------------------------------
6. Multi-Step Form
----------------------------------------------*/

$(function () {

    'use strict';

    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $('#msform').css('height', $('#msform').height());

    function next(button, group, show, hide) {

        $(document).on('click', button, function () {

            $(group + ' .form-control').each(function () {

                var minlength = $(this).attr('minlength');

                if ($(this).val() == null || $(this).val() == '') {

                    var value = 0;

                } else {

                    var value = $(this).val().length;
                }

                if (Number(minlength) <= Number(value)) {

                    $(this).removeClass('invalid').addClass('valid');

                } else {

                    $(this).removeClass('valid').addClass('invalid');
                }
            })

            let field = $(group).find('.form-control').length;
            let valid = $(group).find('.valid').length;

            if (field == valid) {

                if (animating) return false;
                animating = true;

                current_fs = $(this).parents().eq(1);
                next_fs = $(this).parents().eq(1).next();

                $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

                next_fs.show();

                current_fs.animate({

                    opacity: 0

                }, {
                    step: function (now, mx) {

                        scale = 1 - (1 - now) * 0.2;
                        left = (now * 50) + '%';
                        opacity = 1 - now;

                        current_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'position': 'absolute'
                        })

                        next_fs.css({
                            'left': left,
                            'opacity': opacity
                        })
                    },
                    duration: 800,
                    complete: function () {
                        current_fs.hide();
                        animating = false;
                    },
                    easing: 'easeInOutBack'
                })

                $(hide).hide();
                $(show).show();

                if (button == '#next-2') {
                    $('#progressbar').addClass('complete');
                }

                if (button == '#next-3') {

                    $('.form .intro').css('opacity', '0');
                    $(button).parents().eq(5).find('.message').addClass('active');

                    // Here the form is sent.
                    $('#msform').submit();
                }
            }
        })

    }

    next('#next-1', '#group-1', '#step-2, #text-2', '#step-1, #text-1');
    next('#next-2', '#group-2', '#step-3, #text-3', '#step-2, #text-2');
    next('#next-3', '#group-3', '#step-4', '#step-3');

    function prev(button, show, hide) {

        $(document).on('click', button, function () {

            if (animating) return false;
            animating = true;

            current_fs = $(this).parents().eq(1);
            previous_fs = $(this).parents().eq(1).prev();

            $('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');

            previous_fs.show();
            current_fs.animate({

                opacity: 0

            }, {
                step: function (now, mx) {

                    scale = 0.8 + (1 - now) * 0.2;
                    left = ((1 - now) * 50) + '%';
                    opacity = 1 - now;

                    current_fs.css({

                        'left': left
                    })

                    previous_fs.css({

                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity
                    })
                },
                duration: 800,
                complete: function () {

                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            })

            $(hide).hide();
            $(show).show();

            if (button == '#prev-3') {
                $('#progressbar').removeClass('complete');
            }
        })
    }

    prev('#prev-2', '#step-1, #text-1', '#step-2, #text-2');
    prev('#prev-3', '#step-2, #text-2', '#step-3, #text-3');
})

/*----------------------------------------------
7. Submission Parameters
----------------------------------------------*/
$(function () {

    'use strict';

    // Variable to hold request
    var request;

    // Bind to the submit event of our form
    $('#msform').submit(function (event) {

        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();

        // Abort any pending request
        if (request) {
            request.abort();
        }

        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find('input, select, button, textarea');

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request
        // Note: we disable elements AFTER the form data has been serialized
        // Disabled form elements will not be serialized
        $inputs.prop('disabled', true);

        // Fire off the request
        request = $.ajax({
            url: 'php/mail.php', // Enter your back-end URL here
            type: 'post',
            data: serializedData
        })

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {

            // Log a message to the console
            console.log('Hooray, it worked!');
        })

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {

            // Log the error to the console
            console.error(textStatus, errorThrown);
        })

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {

            // Reenable the inputs
            $inputs.prop('disabled', false);
        })
    })
})