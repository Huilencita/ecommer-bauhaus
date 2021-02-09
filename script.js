//declaro variables
const bodyContent = document.getElementById("cart-container");
//variable del ciclo en el body
const cardProduct = document.getElementById("card-product");
// variable para agregar al carrito
const cardBtn = document.getElementById("card-btn");
//variable que reemplaza lo qeu esta en el carrito
let totalCard = document.getElementById("total-product");
//variable que agrega cada producto en el carrito
let totalCardDescription = document.getElementById("selected-products");

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
            <img src="/cromier/asset/bauhaus-shop/${product.img}" alt="">
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h2 class ="price">${product.price}</h2>   
            </div>
            <div class="cant-stock">
                <input type="number" class="input" id="id-${product.id}">
                <label for="id-${product.id}">Cantidad</label>
            </div>  
            <button id="card-btn" class="cta" onclick="mostrar()" type="submit" value="${product.price}">Agregar al Carrito</button>
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

//to do fix transform effects

function renderItems (){
    for (let info of listOfProducts){
        
    }
}
// to do guardar la cantidad

//sumar la cantidad + el precio
//meterlo en el modal




