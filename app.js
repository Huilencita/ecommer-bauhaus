
const bodyContent = document.querySelector('#cart-container')
const cardProduct = document.getElementById("card-product");
//modal
let cerrar = document.getElementById("close");
let abrir = document.getElementsByClassName("cta");
let modal = document.getElementById("modal");
let modalContainer = document.getElementById("modal-container");
let modalTotal = document.getElementById("modal-pop");
let cartIcon = $(".cart-cant");
let cartLogo = $('#navbar-cart');
let cartContent = $('#cart-content');
//cart
let cart = [];

//modal functions

/* function mostrar() {
    modalContainer.style.opacity= "1";
    modalContainer.style.visibility= "visible";
    modalContainer.classList.toggle("modal-close");
};

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalContainer.style.opacity= "0";
        modalContainer.style.visibility= "hidden";
    }, 800)
    
})
 */

//btn animation

$(document).ready(function(){
    $(".animation").append('<span></span>');
    $(".animation").click(function(event){
        let top = $(window).scrollTop() - $(this).offset().top + event.clientY;
        let left = $(window).scrollLeft() - $(this).offset().left + event.clientX;
        $(this).children('span').css({"left": left, "top":top})
        $(this).children('span').addClass('active');
        setTimeout(function(){
            $('.animation span').removeClass('active')
        }, 500)
    });
});

//showMenu

let iconMenu = $("#navbar-logo");
function showMenu (){
    iconMenu.click(function(){
        $(".navbar-menu").toggleClass('displayMenu');
    })
}
showMenu()

//display cards
function displayCards (products){
    let result = "";
    products.forEach(product => {
        result += `
        <div id="card-product">
            <img src="asset/bauhaus-shop/${product.img}" alt="">
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
}
displayCards(listOfProducts);

//display items


//funcion para meter en el carrito modal
//hacer que se guarde el numero del carrito en el storage
//no se me guarda bien las cosas del storage (creo)
//meter los items en el carrito-modal bien con los estilos

//display cart modal

$(function() {
    cartLogo.click(function(event) {
        event.preventDefault();
        cartContent.slideToggle(300);
        console.log("entra");
    })
}) 

function showItems(){
    let cartItem = '';
    cart.forEach(item => {
        cartItem += `
            <div class="cart-flex cart-items">
                <p>Cant</p>
                <p>${item.name}</p>
                <p>${item.price}</p>
                <span id = ${item.id}x</span>
            </div>
        `
        console.log(cartItem);
        let afterContent = $("#cart-after")
        afterContent.after(cartItem);
        return cartItem;
        
    }); 
}

$(function() {
    cartLogo.click(function(event) {
        event.preventDefault();
        showItems(cart);
    })
}) 


/* cartLogo.click(function(event){
    event.preventDefault();
    cartContent.animate({
        display: "block",
        right: "0px"
    }, console.log("entra")
    )
}) */

//cartContent.addClass("change-cart-style")






