import './index.scss';

$('.main_section_prof').on('click', function () {
    let href = $(this).attr('data-href');
    window.location = href;
})


let clip_1 = $('.clip1').attr('data-src');
let clip_2 = $('.clip2').attr('data-src');
let clip_3 = $('.clip3').attr('data-src');

$('.clip1').css('background', `url(${clip_1}) no-repeat center top / cover`);
$('.clip2').css('background', `url(${clip_2}) no-repeat center top / cover`);
$('.clip3').css('background', `url(${clip_3}) no-repeat center top / cover`);






$('.author_slider__block').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    autoplay: true,
    arrows: false
});

$('.left_slide_arrow').click(function () {
    $(".author_slider__block").slick('slickPrev');
});
$('.right_slide_arrow').click(function () {
    $(".author_slider__block").slick('slickNext');
});

