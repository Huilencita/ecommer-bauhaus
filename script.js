//container de las cards
const bodyContent = document.getElementById("cart-container");
//cards
const cardProduct = document.getElementById("card-product");
//boton agregar al carrito
const cardBtn = document.getElementById("card-btn");

let cart = [];

//funciones

//mostrar en pantalla

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
            <button id="${product.id}" class="cta" onclick="mostrar()" type="submit" value="${product.price}">Agregar al Carrito</button>
        </div>
        `;
    return aux;
    }
showProducts(listOfProducts);

//primero tengo que mostrarlos en el modal y despues los meto en el carrito

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


//agregar productos al carrito

if (localStorage.getItem("cart") != null) {
    console.log("Entro a la validacion");
    let valoresDelCarrito = JSON.parse(localStorage.getItem("cart"));
    carrito = valoresDelCarrito;
  }
  
  function agregarAlCarrito(listOfProducts) {
    cart.push(listOfProducts);
    localStorage.setItem("cart", JSON.stringify(carrito));
    console.log(listOfProducts)
  }


function addingEventAdd(){
    let btnList = document.querySelectorAll(".cta");
    console.log(btnList)
    for (const button of btnList) {
        button.addEventListener('click', agregarAlCarrito(JSON.stringify(cart)))
    }

}

addingEventAdd();  

//mostrar precio en el modal

/* let inputs = document.querySelectorAll('.cta');
  
  inputs.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let modalText = document.getElementById("modal-pop");
        const productTotal = e.target.value;
                modalText.innerHTML = `
                    <h4>Cantidad de productos seleccionados:</h24>
                    <h2>Total: ${productTotal}</h2>`;
    });
  });

 */
//to do fix transform effects


//PRUEBAS

//mi funcion tiene que:
//mostrarme el total del producto x item
//sumar la cantidad de productos que se agreguen

