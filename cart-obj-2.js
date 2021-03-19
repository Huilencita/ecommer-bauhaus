
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
        console.log("entra");
        $('.cta').each((i, e) => {
            const btn = $(e);
            const id = btn.attr('id');
            const inCart = cart.find(item => item.id == id);
            btn.prop('disabled', inCart);
            if (inCart) btn.text('Agregado');
            //si se recarga deberia quedar grabado ele stado del boton, pero se rompe
            btn.on('click', (event) => {
                console.log("entra");
                console.log(btn);
                event.preventDefault();
                btn.prop('disabled', inCart).text('Agregado');
                let cartItemID = this.getProductStorage(id);
                cart.push(cartItemID);
                console.log(cartItemID);
                cartIcon.html(cart.length);
                showItems();
                this.saveCart(cart);
            });
        });
    }

    //guarda en el storage la lista de todos los productos
    this.saveStorageProducts = products => localStorage.setItem('products', JSON.stringify(products));

    this.getProductStorage = id => JSON.parse(localStorage.getItem("products")).find(product => product.id == id);

    //guarda en el storage el carrito
    this.saveCart = cart => localStorage.setItem("cart", JSON.stringify(cart));

    //obtengo los datos del carrito
    this.getCart = () => JSON.parse(localStorage.getItem("cart"));

    this.clearCart = () => {
        //selectores
        $('button.cart-close-btn').on('click', (i, e ) => {
            $(e).closest('.cart-items').remove();
            myElement = cart.find(item => item.id == this.id);
            cart = cart.filter(item => item.id != myElement)
            myCart.saveCart(cart);
            showTotalInCart(cart);
            cartIcon.html(cart.length);
        });
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


