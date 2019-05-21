String.prototype.toJadenCase = function () {
  return this
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");