 //QUE VA A HACER MI CARRITO

 //Tiene items
 //calcula el total de los items
 //guarda los datos de los items (storage)
 //elimina items 


/* 
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
 */
    //INSTANCIO OBJ
/* const miCarrito = new Carrito();
miCarrito.saveStorage(); */

//PUSHEO AL CARRITO LOS ITEMS
/* miCarrito.addItems(listOfProducts[0]);
miCarrito.addItems(listOfProducts[1]);
miCarrito.addItems(listOfProducts[2]);
miCarrito.addItems(listOfProducts[3]);
miCarrito.addItems(listOfProducts[4]);
 */

// PRUEBAS 2 y 3

/* function mostrarAlgo (listOfProducts) {
    listOfProducts.forEach(item => {
    let modalText = document.getElementById("modal-pop");
    modalText.innerHTML = `
            <h4>Cantidad de productos seleccionados:</h24>
            <h2>Total: ${item.price}</h2>
            `;

     });
 }
 */
/*  function mostrarModal() {
    let total = 0;
    miCarrito.items.forEach(item => {
       total += item.price;
    });
    let modalText = document.getElementById("modal-pop");
       modalText.innerHTML = `
           <h4>Cantidad de productos seleccionados:</h24>
           <h2>Total: ${total}</h2>
       `
}

mostrarModal(); */

/*  function mostrarModal() {
 
const total = carrito.items.reduce((acc, current) => {
acc = acc + current
}, 0);
    let modalText = document.getElementById("modal-pop");
       modalText.innerHTML = `
           <h4>Cantidad de productos seleccionados:</h24>
           <h2>Total: ${total}</h2>
       `
}

mostrarModal(); */

/* function mostrarModal() {
 
    const total = carrito.items.reduce((acc, current.price) => {
    acc = acc + current
    }, 0);
        let modalText = document.getElementById("modal-pop");
           modalText.innerHTML = `
               <h4>Cantidad de productos seleccionados:</h24>
               <h2>Total: ${total}</h2>
           `
    }
    
    mostrarModal(listOfProducts); */