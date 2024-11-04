//CalculateDaysBetweenDates


const calculateDays=(d1,d2)=>{
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let diff = (date2-date1)/(24*60*60*1000);
    console.log(`${diff} days`);
    

}
console.log(calculateDays("2024-01-01","2024-01-31"));
