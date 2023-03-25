// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
  // convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.2;
  //return the dollar value
  return valueInDollar;
};

const fromDollarToYen = function (valueInDollar) {
  let valueInYen = valueInDollar * 106.58;
  return valueInYen;
};

const fromYenToPound = function (valueInYen) {
  let valueInPound = valueInYen * 0.00625;
  return valueInPound;
};

const sum = (a, b) => {
  return a + b;
};

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
