import './index.scss';



window.addEventListener('scroll', function () {
    check_page_ofset();
});

check_page_ofset();


function check_page_ofset() {
    if (pageYOffset >= 170) {
        $('.header').addClass('active_scroll');
        $('.header_dinamic__block').addClass('header_dinamic__block_hidden');
        $('.header_dinamic__block_visible').css('top', '-120px');
        setTimeout(() => {
            $('.header_dinamic__block_visible').css('top', '-20px');
        }, 800);
    } else {
        $('.header').removeClass('active_scroll');
        $('.header_dinamic__block').removeClass('header_dinamic__block_hidden');
        $('.header_dinamic__block_visible').css('top', '-20px');


    }
}



// function waiting_menu({ status }) {
//     let check_length = $('.wrapper').length;
//     if (check_length == 0) {
//         if (status == 'show') {

//             let wrapper = document.createElement('div');
//             wrapper.classList.add('wrapper');

//             wrapper.innerHTML = `
//             <ul class="bg-bubbles">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>              
//             `;

//             $('body')[0].appendChild(wrapper);
//         } else if (status == 'hide') {
//             $('.wrapper').remove();
//         }
//     }

// }

$('.burger_menu').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
        $(this).addClass('closed')
        $(this).removeClass('active')
        $('.header_dinamic__block').removeClass('active_menu');

    } else {
        $(this).removeClass('closed')
        $(this).addClass('active')
        $('.header_dinamic__block').addClass('active_menu');


    }
    $(this).data('clicks', !clicks);
});