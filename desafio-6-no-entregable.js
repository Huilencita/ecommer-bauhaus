let computadoraUno = ["8GB", 0145524, "1TB",  "Intel Core i9", "Lenovo", "Desktop"];
let computadoraDos = ["4GB", 30458977, "1TB",  "Ryzen 5 2600", "Dell", "Notebook"];

console.log(computadoraUno);

function concat() {
    let promo = computadoraUno.concat(computadoraDos);
    return promo;
}

console.log(concat());