function add(n) {
    let sum = n;
  
    function inner(m) {
      sum += m;
      return inner;
    }
  
    inner.toString = function() {
      return sum;
    };
  
    return inner;
  }
  console.log(add(1)(6)(-3).toString())