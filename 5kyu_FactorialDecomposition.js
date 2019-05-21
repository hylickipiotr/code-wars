function decomp(n) {
  const decomposeNumber = (number, divider = 2, dividers = []) => {
    while(number % divider !== 0 && divider < number) { divider++; }
    if(number % divider === 0) {
      if(number/divider !== 1) {
        dividers.push(divider);
        dividers.push(...decomposeNumber(number/divider));
      } else {
        return [divider];
      }
    }
    return dividers;
  } 

  var dividers = [];
  [...Array(n).keys()].map(factorial => dividers.push(...decomposeNumber(factorial+1)));

  return Array
    .from(new Set(dividers))
    .map(unique => {
      const counter = dividers.filter(number => number === unique).length;
      return counter > 1 ? `${unique}^${counter}` : unique; 
    })
    .join(' * ');
}

console.log(decomp(17) == "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17");
console.log(decomp(5) == "2^3 * 3 * 5");
console.log(decomp(22) == "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19");
console.log(decomp(14) == "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13");
console.log(decomp(25) == "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23");