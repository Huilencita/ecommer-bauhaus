 //QUE VA A HACER MI CARRITO

 //Tiene items
 //calcula el total de los items
 //guarda los datos de los items (storage)
 //elimina items 
 
 function Carrito (){
    this.items = [];
    //agregar al carrito
    this.addItems = function(item){ 
        this.items.push(item);    
        console.log(this.addItems);
        }
    //mostrar el total
    //cargarlo en el storage
    }
    
var miCarrito = new Carrito();

miCarrito.addItems(listOfProducts);










// PRUEBAS
/* var resultadoDeCarrito = 0;

document.getElementById("carrito").innerHTML = resultadoDeCarrito;

function sumarAlCarrito(item){
    resultadoDeCarrito = resultadoDeCarrito + item;
}
 */
 

 function mostrarAlgo (listOfProducts) {
     listOfProducts.forEach(item => {
        let modalText = document.getElementById("modal-pop");
        modalText.innerHTML = `
            <h4>Cantidad de productos seleccionados:</h24>
            <h2>Total: ${item.price}</h2>`

     });
 }

 mostrarAlgo(listOfProducts);

