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
            console.log(cardBtn);
            cardBtn.forEach(btn =>{
                let id = btn.id;
                let inCart = cart.find(item => item.id == id);
                if(inCart){
                   btn.innerText = "Agregado";
                   btn.disabled = true;
                }
                btn.addEventListener('click', event => {
                    console.log(event);
                    event.target.innerText = "Agregado";
                    event.target.disabled = true;
   
                    let cartItem = this.getProductStorage(id);
                    cart.push(cartItem);
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
    }
   
let myCart = new CartFunctions();
myCart.saveStorageProducts(listOfProducts);
myCart.addItems();
   