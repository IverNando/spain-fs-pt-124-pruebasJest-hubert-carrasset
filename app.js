
// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// UN EURO ES IGUAL A 1.07 DOLARES 
const fromDollarToYen = function (valueInDollar) {
    let eurosDolares = valueInDollar / oneEuroIs.USD  
    let euroPorYenes = eurosDolares * oneEuroIs.JPY
    return euroPorYenes;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// un euro es igual a 156.5 yenes 
const fromYenToPound = function(valueInYenes){
    let eurosYenes = valueInYenes / oneEuroIs.JPY 
    let eurosPorLibras = eurosYenes * oneEuroIs.GBP
    return eurosPorLibras

}
console.log(fromDollarToYen(7.30));
console.log(fromYenToPound(1067.71));



module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};