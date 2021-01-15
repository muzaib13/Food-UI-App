$(document).ready(function(){

$('.js--scroll-to-plans').click(function(){
    $('html','body').animate({scrolltop:$('.js--section-plans').offset().top},1000);
})

});
