
 //QUE VA A HACER MI CARRITO 
 function CartFunctions() {
    //Tiene items
    //agregar los items al carrito
    //calcula el total de los items
    //guarda los datos de los items (storage)
    //elimina items 
        /* this.products = listOfProducts; */
        this.products = async () => { 
            try { 
                const res = await fetch('data.json'); 
                const data = await res.json();
                displayCards(data);
                this.saveStorageProducts(data);
            } catch (error) { 
                console.log(error);
            }
        }
        this.addItems = function () {
            let cardBtn = $('.cta');
            

            [...cardBtn].forEach(btn =>{
                let id = btn.id;
                inCart = cart.find(item => item.id == id);
                //si se recarga deberia quedar grabado ele stado del boton, pero se rompe
                $(document).ready(function() {
                    if(inCart){
                        btn.innerText = "Agregado";
                        btn.disabled = true;
                    }
                });
                btn.addEventListener('click', event => {
                    event.preventDefault;
                    event.target.innerText = "Agregado";
                    event.target.disabled = true;
                    let cartItemID = this.getProductStorage(id);
                    cart.push(cartItemID);
                    
                    let cartInCart = cartIcon.html(cart.length);
                    cartInCart;
                    showItems();
                    this.saveCart(cart); 
                });
            });
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

            removeItem.click(function(){
                let elementHTML = $(this).closest('.cart-items');
                elementHTML.remove();  
                let idBtn = this.id 
                myElement = cart.find(item => item.id == idBtn);
                cart = cart.filter(item => item.id != myElement.id)
                myCart.saveCart(cart);
                showTotalInCart(cart);
                
                cartIcon.html(cart.length);
                
                
            })
        }
    }

   //----------------------------

let myCart = new CartFunctions();


$(document).ready(function(){
    myCart.products();
    if (myCart.getCart() != null) {
        //cart es igual a lo que haya
        cart = JSON.parse(localStorage.getItem("cart"));
        //mantengo el contador en ese estado
        cartIcon.html(cart.length);
        showItems();
    }
})


