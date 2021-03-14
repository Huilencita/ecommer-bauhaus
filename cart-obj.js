
  //QUE VA A HACER MI CARRITO 
 function CartFunctions() {
    //Tiene items
    //agregar los items al carrito
    //calcula el total de los items
    //guarda los datos de los items (storage)
    //elimina items 
       this.products = listOfProducts;
       this.addItems = function () {
            let cardBtn = document.querySelectorAll('.cta');
            cardBtn.forEach(btn =>{
                let id = btn.id;
                let inCart = cart.find(item => item.id == id);
                if(inCart){
                   btn.innerText = "Agregado";
                   btn.disabled = true;
                }
                btn.addEventListener('click', event => {
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
            let inCart = '';
            
            console.log(inCart);

            removeItem.click(function(){
                let elementHTML = $(this).closest('.cart-items');
                /* elementHTML.remove(); */
                console.log(inCart);
                /* cart = cart.filter(item => item.id !== inCart.id);
                console.log(cart); */
                showTotalInCart(cart);
                [...removeItem].forEach(btn => {
                    let id = btn.id;
                    //me devuelve el objeto a eliminar para sacarlo del carrito
                    inCart = cart.find(item => item.id == id);
                    console.log(inCart);
                })
            })
        }

    }

   //----------------------------
let myCart = new CartFunctions();
myCart.saveStorageProducts(listOfProducts);
myCart.addItems();



$(document).ready(function(){
    if (myCart.getCart() != null) {
        //cart es igual a lo que haya
        cart = JSON.parse(localStorage.getItem("cart"));
        //mantengo el contador en ese estado
        cartIcon.html(cart.length);
        showItems();
    }
})
