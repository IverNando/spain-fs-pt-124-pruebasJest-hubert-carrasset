
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("7.30 dolares debe de ser 1519.41 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yenes = fromDollarToYen(7.30);

    const expected = 7.30 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(7.30)).toBe(1067.7102803738317);
})

test("1067.71 yenes debe de ser 5.9355 libras", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    const libras = fromYenToPound(1067.71);

    const expected = 1067.71 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1067.71)).toBe(5.935512460063898);
})