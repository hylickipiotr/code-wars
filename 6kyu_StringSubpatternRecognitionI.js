function hasSubpattern(str) {
  if (str.length < 2)  {
    return false;
  }
  status = true;
  for(let i=1; i < str.length + 1; i++) {
    subStr = str.substring(0,i);
    for(let j=i; j < str.length; j=j+i) {
      s=str.substring(j,j+i);
      if (subStr !== s) {
        status = false;
        break;
      }
      status = true;
    }
    if (status) {
      return status;
    }
  }
  return false;
}

console.log("a", false, hasSubpattern("a")); //false no repeated pattern
console.log("aaaa", true, hasSubpattern("aaaa")); //created repeating "a"
console.log("abcd", false, hasSubpattern("abcd")); //no repeated pattern
console.log("abababab", true, hasSubpattern("abababab")); //created repeating "ab"
console.log("ababababa", false, hasSubpattern("ababababa")); //cannot be entirely reproduced repeating a pattern
console.log(hasSubpattern("qwertyuiopasdfghjklzxcvbnmmnbvcxzlkjhgfdsapoiuytrewqqazxswedcvfrtgbnhyujmkiolpqwertyuiopasdfghjklzxcvbnmmnbvcxzlkjhgfdsapoiuytrewqqazxswedcvfrtgbnhyujmkiolp")); //cannot be entirely repr`oduced repeating a pattern