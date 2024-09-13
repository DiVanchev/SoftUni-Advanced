function previousDay(year, month, day) {
    let prevDay = new Date(year, month - 1, day);
    prevDay.setDate(prevDay.getDate() - 1);
    
    console.log(`${prevDay.getFullYear()}-${prevDay.getMonth() + 1}-${prevDay.getDate()}`); 
}
previousDay(2016, 9, 30);