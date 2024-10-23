function argumentInfo(...args) {
    const typeCounts = {};
  
    args.forEach(arg => {
      const type = typeof arg;
      console.log(`${type}: ${arg}`);
  
      if (!typeCounts[type]) {
        typeCounts[type] = 0;
      }
      typeCounts[type]++;
    });
  
    const sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
  
    sortedTypes.forEach(([type, count]) => {
      console.log(`${type} = ${count}`);
    });
  }
  
  argumentInfo('cat', 42, function () { console.log('Hello world!'); });
  