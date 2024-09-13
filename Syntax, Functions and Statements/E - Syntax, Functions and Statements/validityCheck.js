function isValidDistance(x1, y1, x2, y2) {
  
    function calculateDistance(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
  
    function checkDistance(x1, y1, x2, y2) {
      const distance = calculateDistance(x1, y1, x2, y2);
      if (Number.isInteger(distance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
      } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
      }
    }
  
    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);
  }
  
  isValidDistance(3, 0, 0, 4);
  