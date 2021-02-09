function Carrito (modelo, precio, talle, color, stock){
    this.modelo = modelo;
    this.precio = precio;
    this.talle = talle;
    this.color = color;
    this.stock = stock;
}

producto1 = new Carrito("ALPHA Prime Black", "144,84€", "3-5 UK", "Negro", 5);
producto2 = new Carrito("DOUBLE Mid Bold White", "153,38€", "4-6.5 UK", "Blanco", 4);
producto3 = new Carrito("DOUBLE Mid Black Lines", "153,38€", "7 UK", "Negro", 3);
producto4 = new Carrito("DOUBLE Mid Suede Musk", "153,38€", "5.5 UK", "Verde", 7);
producto5 = new Carrito("MARCELLO White Shade", "153,38€", "3.5-5 UK", "Blanco", 9);

let listItem1 = Object.values(producto1);
let listItem2 = Object.values(producto2);
let listItem3 = Object.values(producto3);
let listItem4 = Object.values(producto4);
let listItem5 = Object.values(producto5);

let total = [listItem1 , listItem2 , listItem3 , listItem4 , listItem5];

console.log(total);

/*
ESTO NO ME FUNCIONO

function mostrarModelo (){
    for (i = 0; i < total[i].length; i++ ) {

        console.log(`Los modelos disponibles son : ${total}`);
    }
} */


//ASI QUE GUGLEE Y ENCONTRE ESTO QUE SI
arrayTitle = total.map(function(x) {
    return x[0];
});

console.log (`Los modelos disponibles son : ${arrayTitle}`);


