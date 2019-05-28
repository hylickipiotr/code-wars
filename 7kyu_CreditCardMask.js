function maskify(cc) {
  return cc.split('').map((c, i) => i < cc.length - 4 ? "#" : c).join('');
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');