function Products (color, price, size) {
    this.color = color;
    this.price = price;
    this.size = size;


    this.show = function() {
        let introduceColor = prompt("Elija un color entre blanco, negro, rojo y camel");
        if (introduceColor == "black" || introduceColor == "negro" || introduceColor == "Negro" || introduceColor == "NEGRO") {
            alert(`Hay dos productos disponibles, uno a ${producto1.price} y otro a ${producto3.price}`);
        } else if (introduceColor == "red" || introduceColor == "rojo" || introduceColor == "Rojo" || introduceColor == "ROJO") {
            alert(`Hay un producto disponible, a ${producto4.price}.`);
        } else if (introduceColor == "white" || introduceColor == "blanco" || introduceColor == "Blanco" || introduceColor == "BLANCO") {
            alert(`Hay un producto disponible, a ${producto2.price}.`);
        } else if (introduceColor == "camel" || introduceColor == "beige" || introduceColor == "Camel" || introduceColor == "CAMEL") {
            alert(`Hay un producto disponible, a ${producto5.price}.`);
        } else {
            alert ('No hay productos disponibles.');
        }
    }

}

let producto1 = new Products ("black", 180, "5UK");
let producto2 = new Products ("white", 200, "4.5UK");
let producto3 = new Products ("black", 154, "4UK");
let producto4 = new Products ("red", 133, "5.7UK");
let producto5 = new Products ("camel", 107, "6.5UK");

//Incorpore arrays en este objeto y lo que hice fue lo siguiente:

//1. Converti dos objetos a array.
let firstArray = Object.values(producto2);
let secondArray = Object.values(producto3);

//2. Saque el metodo.
firstArray.pop();
secondArray.pop();

//3. Concatene los dos arrays resultantes en uno y los pase a string para mostrar el stock disponible.
function stock(){
    let total = firstArray.concat(secondArray);
    let description = `STOCK DISPONIBLE: Primer zapatilla de color ${total[0]}, que vale ${total[1]} y talle ${total[2]}. Segunda zapatilla de color ${total[3]}, que vale ${total[4]} y talle ${total[5]}. `
    return description;
}



console.log(stock());

//////////////////////////////////////// Creo que lo hice en la linea 42 (let description), se podia simplificar de otra manera, pero no se si con un bucle o que.

//console.log(producto1.show());