import '../components/scss/style.scss';

import '../components/js/bootstrap.min'

import 'slick-carousel';

var slickHome = $('.slick-home');
var slickProducts = $('.slick-products');
var slickBlog = $('.slick-blog');
var SlickFor = $(".slick-for");
var SlickNav = $(".slick-nav");
var SlickBlogPage = $(".slick-blog-page");

slickHome.slick({
	fade: true,
    autoplay: true
});

slickProducts.slick({

});

slickBlog.slick({

});

SlickBlogPage.slick({

});

SlickFor.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    swipe: false,
    asNavFor: '.slick-nav',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                swipe: true
            }
        }
    ]
});

SlickNav.slick({
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    asNavFor: '.slick-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 8
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});

$('.modal').on('shown.bs.modal', function (e) {
    SlickFor.resize();
    SlickNav.resize();      
});

// $('.slick-blog .slick-prev, .slick-blog .slick-next').clone().appendTo('.slick-blog').addClass('');

// ---------CONTACT--------
$('#name').focus(function() {
    $('#hint1').hide();
});
$('#name').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint1').show();
    }
});

$('#phone').focus(function() {
    $('#hint2').hide();
});
$('#phone').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint2').show();
    }
});

$('#email').focus(function() {
    $('#hint3').hide();
});
$('#email').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint3').show();
    }
});

$('#comment').focus(function() {
    $('#hint4').hide();
});
$('#comment').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint4').show();
    }
});
// ----------YEAR-------------
// var date = new Date(),
// year = date.getFullYear(),
// yearnow = document.getElementById('year');
// yearnow.innerHTML = (' ' + year + ' ');


$('#modalServices').on('show.bs.modal', function () {
    // $('.modal-backdrop').hide();
})

$('body').scrollspy({target: "#navbar", offset: 50});

$("#navbar a").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top -50
    }, 1000, function(){

      window.location.hash = hash;
    });

  }

});


// $(document).ready(function(){   
//   jQuery('#navbar a').click(function(){
//     var sel = this.hash;
//     jQuery('html, body').animate({scrollTop: jQuery(sel).offset().top-100}, 900);
//     return false;
//   });
// });

// -------------INPUT-FILE----------------
function ready ()
{
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function(e)
        {
            console.log(this.files);
            var fileName = '';
            if(this.files && this.files.length > 1)
                fileName = ( this.getAttribute( 'data-multiple-caption' || '').replace('{count}', this.files.length));
            else
                fileName = this.files[0].name;
            if(fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
};

document.addEventListener('DOMContentLoaded', ready);


// -------------BACK-TO-TOP---------------
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});
// -----------MOBILE-------


// (function(){
//     var $plugin = jQuery.sub();
//     $plugin.fn.animate = function(props, speed, cb){
//         if(typeof(speed) == "function")
//             cb = speed, speed = 500;
//         if(typeof(cb) != "function")
//             cb = function(){};
//         return $.each(this, function(i, el){
//             el = $(el);
//             if(props.float && props.float != el.css("float")){
//                 var elem = el.clone().css(props).insertBefore(el),
//                     temp = (props.float == el.css("float")) ? elem.position().left : el.position().left;
//                 props.marginLeft = elem.position().left;
//                 elem.remove();
//                 el.css({float:"left",marginLeft:temp});
//             }
//             $(this).animate(props, speed, function(){
//                 $(this).css(props);
//                 cb();
//             });
//         });
//     };
    
//     $(".contact-panel__mail").bind("click", function(){
//         $plugin(this).animate({float:"right"}, 1000); 
//     });
    
//     $(".contact-panel__mail").bind("click", function(){
//         $plugin(this).animate({float:"left"}, 1000); 
//     });

// })();

$(document).ready(function() {
    $(window).scroll(function() {
        var head = $('.header');
        var panel = $('.contact-panel');
        if($(this).scrollTop() > 0) {
            head.addClass('fixed');
            panel.addClass('fixed');
            $('.home').addClass('fixed');
            $('.contact-panel p').addClass('destroy');
            $('.contact-panel__mail').addClass('move');
            $('.contact-panel__tel').addClass('move');
            // $('.contact-panel__mail').animate({float:"left"}, 1000);
        }
        else {
            head.removeClass('fixed');
            panel.removeClass('fixed');
            $('.home').removeClass('fixed');
            $('.contact-panel p').removeClass('hidden');
        }
    })
});

function changeMobile() {
    if(matchMedia) {
        var screen = window.matchMedia('(max-width: 768px)');
        screen.addListener(changes);
        changes(screen);
    }
    function changes(screen) {
        if(screen.matches) {
            $('.header__socials').appendTo('.header__menu');
            $(document).ready(function() {
                $(window).scroll(function() {
                    if($(this).scrollTop() > 0) {
                        $('.contact-panel p').addClass('destroy');
                    }
                    else {
                        $('.contact-panel p').addClass('destroy');
                    }
                });
            });
        }
        else {
            $('.header__socials').appendTo('.header__content');
            $('#hamburger').removeClass('opened');
            $('#navbar').removeClass('opened');
            $(document).ready(function() {
                $(window).scroll(function() {
                    if($(this).scrollTop() > 0) {
                        $('.contact-panel p').addClass('destroy');
                    }
                    else {
                        $('.contact-panel p').removeClass('destroy');
                    }
                });
            });
        }
    };
};
changeMobile();

function ShowMenu() {
    $('#hamburger, #close').click(function() {
        // $(this).toggleClass('opened')
        $('#navbar').toggleClass('opened');
    });
    $('#navbar > ul > li > a').click(function() {
        $('#navbar').removeClass('opened');
    });
}
ShowMenu();