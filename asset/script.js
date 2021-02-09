//declaro variables

//variable del lugar en el body en donde va a estar el ciclo

const bodyContent = document.getElementById("cart-container");
//variable del ciclo en el body
const cardProduct = document.getElementById("card-product");
// variable para agregar al carrito
const cardBtn = document.getElementById("card-btn");
//variable que reemplaza lo qeu esta en el carrito
let totalCard = document.getElementById("total-product");
//variable que agrega cada producto en el carrito
let totalCardDescription = document.getElementById("selected-products");

//despues voy a tener que hacer una funcion que rellene el body con todos los elementos de las card
/* function products (){
    let divOfProducts = `
    <div id="card-product">
    <img src="${listOfProducts.img}" alt="">
    <div>
        <h3>${listOfProducts.name}</h3>
        <p>${listOfProducts.description}</p>
        <h2>${listOfProducts.price}</h2>   
    </div>
    <div class="cant-products">
        <label for=""></label>
        <input type="text">
    </div>
    <button id="card-btn" type="submit">Agregar al Carrito</button>
</div>
    `
    return divOfProducts;
}
*/
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
            <img src="./imagen/${product.img}" alt="">
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h2>${product.price}</h2>   
            </div>
            <div class="cant-products">
                <label for=""></label>
                <input type="text">
            </div>
            <button id="card-btn" type="submit">Agregar al Carrito</button>
        </div>
        `;
    return aux;
    }

showProducts(listOfProducts);