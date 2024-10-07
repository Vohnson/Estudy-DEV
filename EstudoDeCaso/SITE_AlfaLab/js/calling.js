
$(document).ready(function () {
    $(".owl-carousel-post-box").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        smartSpeed: 1000,
        thumbs: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    })
});

$('.owl-carousel-4').owlCarousel({
    margin:2,
    loop:true,
    responsiveClass: true,
    autoHeight:true,

    responsive:{
        0: {
            items: 1,
            nav: false
        },
        500: {
            items: 2.1,
            nav: false
        }
    }
})

var owl = $('.owl-carousel-6');
owl.owlCarousel({
    items:2.1,
    loop:true,
    margin:1,
    responsiveClass: true,
    autoplay:true,
    responsive:{
        0: {
            items: 1.09,
            nav: false
        },
        500: {
            items: 2,
            nav: false
        }
    },
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


//Slide blog
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 100,
        responsiveClass: true,
        smartSpeed: 1000,
        thumbs: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
});


$(document).ready(function () {
    $(".owl-carousel2").owlCarousel({
        loop: true,
        margin: 10,
        thumbs: false,
        responsiveClass: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 1,
                nav: false
            },
            991: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })
});


$(document).ready(function () {
    $(".owl-carousel3").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        smartSpeed: 1000,
        thumbs: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 2,
                nav: false
            },
            991: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })
});

$(document).ready(function () {
    $(".owl-carousel4").owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 1,
                nav: false
            },
            991: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })
});


$(document).ready(function () {
    $(".owl-carousel5").owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        thumbs: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 2,
                nav: false
            },
            991: {
                items: 2,
                nav: false,
                loop: true
            }
        }
    })
});

$(document).ready(function () {
    $(".owl-carousel-side").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        thumbs: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 1,
                nav: false
            },
            991: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })
});
