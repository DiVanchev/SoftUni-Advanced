function extract(content) {
  let para = document.getElementById(content).textContent;
  let pattern = /\(([^)]+)\)/g;
  let result = [];
  let match ;
  
  while ((match = pattern.exec(para)) !== null) {
    result.push(match[1]);
  }
  let text = result.join("; ");
  
  return text;
}


