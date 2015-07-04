// Slider

$('.partners-slide').slick({
    arrows: false,
    autoplay: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1
});

$('.partners-nav.prev').click(function(){
    $('.partners-slide').slick('slickPrev');
});

$('.partners-nav.next').click(function(){
    $('.partners-slide').slick('slickNext');
});


$('.winner ul').slick({
    arrows: false,
    autoplay: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.winner-nav.prev').click(function(){
    $('.winner ul').slick('slickPrev');
});

$('.winner-nav.next').click(function(){
    $('.winner ul').slick('slickNext');
});

//---


$(".winner-number").fancybox({
    "padding" : 0
});
