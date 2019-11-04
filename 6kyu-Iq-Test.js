const iqTest = numbers => {
  const { oddIndexes, evenIndexes } = numbers
    .split(' ')
    .reduce((result, number, i) => {
      if (number % 2 === 0) {
        result.evenIndexes.push(i+1);
      } else {
        result.oddIndexes.push(i+1);
      }
      return result;
    }, 
    { 
      oddIndexes: [], 
      evenIndexes: [] 
    });

  return oddIndexes.length < evenIndexes.length ? Number(oddIndexes) : Number(evenIndexes);
}