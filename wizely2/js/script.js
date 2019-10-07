$(document).ready(function(){
    //smooth scroll
    $('.nav-features').on('click',function(e){
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top + 'px'
        },1000,'swing');
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        autoplay: true,
        mouseDrag: true
    });
    $('.container-testimonial.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
});