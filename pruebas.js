const bodyContent = document.querySelector('#cart-container')
let cartIcon = $(".cart-cant");
let cartLogo = $('#navbar-cart');
let cartContent = $('#cart-content');


//cart
let cart = [];

$(document).ready(function(){
    let afterContent = $("#cart-after");
    // Todo tu codigo aca
    //variables


    function CartFunctions() {
        //tomo los productos
        this.products = async () => { 
            try { 
                const res = await fetch('data.json'); 
                const data = await res.json();
                this.displayCards(data);
                this.saveStorageProducts(data);
            } catch (error) { 
                console.log(error);
            }
        }
        //muestro los productos en el html
        this.displayCards = function (data){
            let result = "";
            data.forEach(product => {
                result += `
                <div class="card-product">
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
            this.addItems();
        }
        //aniado productos al carrito
        this.addItems = function () {
            let cardBtn = $('.cta');
            

            [...cardBtn].forEach(btn =>{
                let id = btn.id;
                inCart = cart.find(item => item.id == id);
                //si se recarga deberia quedar grabado ele stado del boton, pero se rompe
                if(inCart){
                    btn.innerText = "Agregado";
                    btn.disabled = true;
                }
                btn.addEventListener('click', event => {
                    event.preventDefault;
                    event.target.innerText = "Agregado";
                    event.target.disabled = true;
                    let cartItemID = this.getProductStorage(id);
                    cart.push(cartItemID);
                    console.log(cartIcon);
                    alert("aca entra")
                    let cartInCart = cartIcon.html(cart.length);
                    console.log(cartItemID);
                    cartInCart;
                    this.showItems(cartItemID);
                    this.saveCart(cart); 
                });
            });
        }
        //sumo total
        this.showTotalInCart = function (){
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

        //muestro el carrito en el html
        this.showItems = function (item){
            /* let cartItems = ''; */
            let cartItems = `
                <div class="cart-flex cart-items">
                    <p>Cant</p>
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                    <button class="cart-close-btn" id = ${item.id}>
                        <svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                            <switch>
                                <foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/>
                                <g i:extraneous="self">
                                    <polygon points="97.5,14.9 85.1,2.5 50,37.6 14.9,2.5 2.5,14.9 37.6,50 2.5,85.1 14.9,97.5 50,62.4 85.1,97.5 97.5,85.1 62.4,50"/>
                                </g>
                            </switch>
                        </svg>
                    </button>
                </div>
            `      
            afterContent.after(cartItems);    
            this.showTotalInCart();
            /* this.clearCart(); */
        } 
        
       //guarda en el storage la lista de todos los productos
        this.saveStorageProducts = function(products) {
            localStorage.setItem('products', JSON.stringify(products));    
       }

        this.getProductStorage = function (id){
            let products = JSON.parse(localStorage.getItem("products"));
            let productSeleccionado = products.find(product => product.id == id);
            return productSeleccionado; 
           
       }
       //guarda en el storage el carrito
        this.saveCart = function (cart) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        //obtengo los datos del carrito
        this.getCart = function (){
            return JSON.parse(localStorage.getItem("cart"));
        }
        this.clearCart = function(){
            //selectores
            let removeItem = $('button.cart-close-btn');
            console.log(cart);
            removeItem.click(function(){
                let elementHTML = $(this).closest('.cart-items');
                elementHTML.remove();  
                let idBtn = this.id 
                myElement = cart.find(item => item.id == idBtn);
                cart = cart.filter(item => item.id != myElement.id)
                console.log(cart);
                this.showTotalInCart();
                
                cartIcon.html(cart.length); 
                this.saveCart();  
            })
        }
        this.savedCart =  function () {
            if (this.getCart() != null){
               cart = JSON.parse(localStorage.getItem('cart'));
               cartIcon.html(cart.length);
               
            }
        }
    }
    let myCart = new CartFunctions();
    myCart.products();
    myCart.savedCart();
    console.log(myCart.showItems());
    
});


   //----------------------------

