'use strict'



var Slider = $('#slider-ss');
var item_info = $('#item-info');
var item_info2 = $('#item-info2');
var item_info3 = $('#item-info3');




item_info2.owlCarousel({
    rtl: true,
    items:4,
    loop : true,
    // margin:5,
})

item_info.owlCarousel({
    rtl: true,
    items:5,
    loop : true,
    // margin:5,
})

Slider.owlCarousel({
    rtl: true,
    items:1,
    loop : true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
})


item_info3.owlCarousel({
    rtl: true,
    items:8,
    loop : true,
})


// ----------------------------

$('#login-box').click(function() {
    $('.login').css('display','flex')
});

$('#close-box-login').click(function(e) {
    console.log(e)
    if (e != '#close-box-login') {
        $('.login').css('display','none')
    }
    // $('.login').css('display','none')
});



// $('#login-box').click(function() {
//     $('body').css('opacity' , '.7')
// });

// $('#close-box-login').click(function() {
//     $('body').css('opacity' , '1')
// });


