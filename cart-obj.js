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
        }
    //mostrar el total
    this.totalItems = function() {
        result = 0;
        items.forEach(item => {
            result += item.price;
            console.log(result);
            return result
        });
    }
    //cargarlo en el storage
    }

    //INSTANCIO OBJ
var miCarrito = new Carrito();

//PUSHEO AL CARRITO LOS ITEMS
miCarrito.addItems(listOfProducts[0]);
miCarrito.addItems(listOfProducts[1]);
miCarrito.addItems(listOfProducts[2]);
miCarrito.addItems(listOfProducts[3]);
miCarrito.addItems(listOfProducts[4]);


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

