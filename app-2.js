//variables
const bodyContent = document.querySelector('#cart-container')
let cartIcon = $(".cart-cant");
let cartLogo = $('#navbar-cart');
let cartContent = $('#cart-content');
let cartTotal = $('.cart-total');
let cartItemsWraper = $("#cart-items-wrapper");

//cart
let cart = [];
//show navbar Menu

let iconMenu = $("#navbar-logo");
function showMenu (){
    iconMenu.click(function(){
        $(".navbar-menu").toggleClass('displayMenu');
    });
}
showMenu(); 
//display items

function showItems(){
    /* let cartItems = ''; */
    cartItemsWraper.html('');
    cart.forEach(item => {
        let cartItems = `
            <div class="cart-flex cart-items">
                <p>Cant</p>
                <p>${item.name}</p>
                <p>${item.price}</p>
                <button class="cart-close-btn" id = ${item.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve">
                        <polygon points="97.5,14.9 85.1,2.5 50,37.6 14.9,2.5 2.5,14.9 37.6,50 2.5,85.1 14.9,97.5 50,62.4 85.1,97.5 97.5,85.1 62.4,50"/>
                    </svg>
                </button>
            </div>
        `;
        cartItemsWraper.append(cartItems);
    });


    showTotalInCart();
    myCart.clearCart();
  /*   afterContent.after(cartItem); */
}

function showTotalInCart() {
    let total = 0;
    cart.forEach(item => {
        if (cart == 0) {
            total = 0
        } else {
            let precioNum = parseFloat(item.price);
            total = total + precioNum;
        }
        let totalCart = `
            <h3>Total</h2>
            <h2>${total}</h2>
        `
        $(".cart-total").html(totalCart);
    });
}

//display navbar cart menu

$(function() {
    cartLogo.click(function(event) {
        event.preventDefault();
        cartContent.slideToggle(300);
    });
});

//display cards
function displayCards (data){
    let result = "";
    data.forEach(product => {
        result += `
        <div class="card-product" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <img src="asset/bauhaus-shop/${product.img}" alt="imagenproducto">
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h2 class ="price">${product.price}</h2>
            </div>
            <button id="${product.id}" class="cta animation"  type="submit" value="${product.price}">Agregar al Carrito</button>
        </div>
        `
        bodyContent.innerHTML = result;

    });
    myCart.addItems();
}

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




