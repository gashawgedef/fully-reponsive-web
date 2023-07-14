$(document).ready(function(){
$nav=$('.nav');
$toggleCollapse=$('.toggle-collapse');

/**Click event on toggle Menu */
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse')
});
});

//Owl carousel for blog
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true
});