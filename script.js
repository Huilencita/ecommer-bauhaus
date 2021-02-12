//declaro variables
const bodyContent = document.getElementById("cart-container");
//variable del ciclo en el body
const cardProduct = document.getElementById("card-product");
// variable para agregar al carrito
const cardBtn = document.getElementById("card-btn");


//objeto carrito

function Cart (){
    this.items = [];
    
    this.saveStorage = function (){
        localStorage.setItem('cart', JSON.stringify(listOfProducts));
        sessionStorage.setItem ('cart',JSON.stringify(listOfProducts));
    }
  
}

let myCart = new Cart();
myCart.saveStorage()

//imprimir los productos
function showProducts(listOfProducts){
    bodyContent.innerHTML = "";
    listOfProducts.forEach(function(product){
        const card = buildProduct(product);
        bodyContent.innerHTML += card;
    });
}

function buildProduct(product) {
    let aux = `
        <div id="card-product">
            <img src="/asset/bauhaus-shop/${product.img}" alt="">
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h2 class ="price">${product.price}</h2>   
            </div>
            <div class="cant-stock">
                <input type="number" class="input">
                <label for="id-${product.id}">Cantidad</label>
            </div>  
            <button id="${product.id}" class="cta" onclick="mostrar()" type="submit" value="${product.price}">Agregar al Carrito</button>
        </div>
        `;
    return aux;
    }
showProducts(listOfProducts);


//Modal resultado del carrito

let cerrar = document.getElementById("close");
let abrir = document.getElementsByClassName("cta");
let modal = document.getElementById("modal");
let modalC = document.getElementById("modal-container");

function mostrar() {
    modalC.style.opacity= "1";
    modalC.style.visibility= "visible";
    modalC.classList.toggle("modal-close");
};

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity= "0";
        modalC.style.visibility= "hidden";
    }, 800)
    
})

//mostrar precio en el modal

let inputs = document.querySelectorAll('.cta');
  
  inputs.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let modalText = document.getElementById("modal-pop");
        const productTotal = e.target.value;
                modalText.innerHTML = `
                    <h4>Cantidad de productos seleccionados:</h24>
                    <h2>Total: ${productTotal}</h2>`;
    });
  });


//to do fix transform effects


//PRUEBAS

//mi funcion tiene que:
//mostrarme el total del producto x item
//sumar la cantidad de productos que se agreguen

//prueba 1
/* function mostrarAlgo  (){
    abrir.addEventListener('click', function(){
        items.forEach(product => {
            if (abrir[product].value == product.price){
                let modalText = document.getElementById("modal-pop");
                modalText.innerHTML = `
                    <h4>Cantidad de productos seleccionados:</h24>
                    <h2>Total: ${product.price}</h2>`
                } 
        });
    })
}

mostrarAlgo();
 */

/* function addToCart (){
    for (let i = 0; i < listOfProducts.length; i++) {
        let idProduct = document.querySelectorAll('.cta');
        const productToAdd = document;
        myCart.items.push(productToAdd); 
    }
} */

//mostrar productos en modal


//funcion para transformar el btn en su valor
/*   function verValor(){
    for(let i = 0; i < inputs.length; i++){
      let valorInput = inputs[i].value;
      console.log(valorInput)
    }
  }
console.log(verValor()); */
  
//funcion para agregar al carrito


/* function pruebaAgregarCarrito (product){
    for(let i = 0; i < listOfProducts.length; i++){
        let product = listOfProducts[i];
        if(product.id = )

    }
    
    
}

pruebaAgregarCarrito()
 */
  
  