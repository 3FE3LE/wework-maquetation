// Teniendo el siguiente arreglo:
const precios = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];

// Deberá realizar el cálculo de : promedio, valor máximo, moda, suma total de los precios, suma
// de los precios que son menores a 1500 dólares.

// Promedio
const promedio = precios.reduce((acumulador, precio) => acumulador + precio, 0) / precios.length;

// Valor máximo
const maximo = Math.max(...precios);

// Moda
const moda = (arr) => {
  const map = {};
  let maxCount = 0;
  let mode;
  arr.forEach((num) => {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
    if (map[num] > maxCount) {
      maxCount = map[num];
      mode = num;
    }
  });
  return mode;
};
const modaPrecios = moda(precios);

// Suma total de los precios
const sumaTotal = precios.reduce((acumulador, precio) => acumulador + precio, 0);

// Suma de los precios que son menores a 1500 dólares
const preciosMenores = precios.filter((precio) => precio < 1500);
const sumaMenores1500 = preciosMenores.reduce((acumulador, precio) => acumulador + precio, 0);

console.log('Promedio:', promedio);
console.log('Valor máximo:', maximo);
console.log('Moda:', modaPrecios);
console.log('Suma total:', sumaTotal);
console.log('Suma menores a 1500:', sumaMenores1500);