function inArray(array1, array2) {
  return array1
    .filter((word) => array2.filter((w) => w.includes(word)).length)
    .sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  ),
  ["live", "strong"]
);
console.log(
  inArray(
    ["live", "strong", "arp"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  ),
  ["arp", "live", "strong"]
);
console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  ),
  []
);
