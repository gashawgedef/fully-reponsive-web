
const responsive={
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
$nav=$('.nav');
$toggleCollapse=$('.toggle-collapse');

/**Click event on toggle Menu */
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse')
});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    responsive:responsive
});
$('.move-upward span ').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
});

});

//Owl carousel for blog

//click to scroll top
