const uniqueInOrder = iterable => [...iterable].reduce((result, char) => {
  if (result.length === 0 || result[result.length-1] !== char) {
    result.push(char);
  }
  return result;
}, []);

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
