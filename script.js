//animacions 
$(function() {
    cartLogo.click(function(event) {
        event.preventDefault();
        cartContent.slideToggle(300);
    });
});


//btn agregar al carrito animation

$(document).ready(function(){
    $(".animation").append('<span></span>');
    $(".animation").click(function(event){
        var top = $(window).scrollTop() - $(this).offset().top + event.clientY;
        var left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
        $(this).children('span').css({"left": left, "top":top})
        $(this).children('span').addClass('active');
        setTimeout(function(){
            $('.animation span').removeClass('active')
        }, 500);
    });
});

// reparar on top button

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $("#topBtn").fadeIn();
        } else{
            $('#topBtn').fadeOut();
        };
    });

    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    })
})
