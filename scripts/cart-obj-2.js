
function CartFunctions() {
    this.products = async () => {
        try {
            const res = await fetch('scripts/data.json');
            const data = await res.json();
            displayCards(data);
            this.saveStorageProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    this.addItems = function () {
        $('.cta').each((i, e) => {
            const btn = $(e);
            const id = btn.attr('id');
            const inCart = cart.find(item => item.id == id);
            btn.prop('disabled', inCart);
            
            if (inCart) btn.text('Agregado');
            btn.on('click', (event) => {
                event.preventDefault();
                btn.prop('disabled', inCart).text('Agregado');
                let cartItemID = this.getProductStorage(id);
                cart.push(cartItemID);
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
        $('button.cart-close-btn').on('click', null, (e) => {
            const ele = $(e.target).closest('button.cart-close-btn');
            ele.closest('.cart-items').remove();
            cart = cart.filter(item => item.id != ele.attr('id'));
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


