
const bodyContent = document.querySelector('#cart-container')
const cardProduct = document.getElementById("card-product");
//modal
let cerrar = document.getElementById("close");
let abrir = document.getElementsByClassName("cta");
let modal = document.getElementById("modal");
let modalContainer = document.getElementById("modal-container");
let modalTotal = document.getElementById("modal-pop");
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
            <img src="/asset/bauhaus-shop/${product.img}" alt="">
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








