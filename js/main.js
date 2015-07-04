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

$(".btn-text").fancybox({
    "maxWidth": 1000,
    "padding" : 0
});


var audio = document.getElementById("player");

$('.play').click(function(){
    audio.play();
    $('.play').hide();
    $('.stop').show();
});

$('.stop').click(function(){
    audio.pause();
    $('.stop').hide();
    $('.play').show();
});

/*
var audio = new Audio();
audio.src = './assets/audio/001.ogg';

$('.play').click(function(){
    audio.play();
    $('.play').hide();
    $('.stop').show();
});

$('.stop').click(function(){
    audio.pause();
    $('.stop').hide();
    $('.play').show();
});


*/