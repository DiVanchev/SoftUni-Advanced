function squareStars(n) {
    if (n === 0) {
      n = 5; // Default to 5 if n is 0
    }
  
    for (let row = 0; row < n; row++) {
      let starRow = "";      
      for (let col = 0; col < n; col++) {
        starRow += "* "; 
      }
      console.log(starRow.trim());
  }
}
squareStars(3); 
  