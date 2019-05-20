function nextVersion(version) {
  version = version.split('.');
  var index = version.length-1;
  while(!(Number(version[index]) < 9) && index > 0) {
    version[index] = 0;
    index -= 1;
  }
  version[index] = Number(version[index]) + 1;
  return version.join('.');
}

console.log(nextVersion("1.2.3"),"1.2.4");
console.log(nextVersion("0.9.9"),"1.0.0");
console.log(nextVersion("1"),"2");
console.log(nextVersion("1.2.3.4.5.6.7.8"),"1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9"),"10.0");