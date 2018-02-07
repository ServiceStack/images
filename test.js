var heroes = require('./heroes');

console.log("heroes.get(1)", heroes.get(1));
console.log("heroes.get(1000000)", heroes.get(1000000));
console.log("heroes.random()", heroes.random());
console.log("heroes.hourly()", heroes.hourly(), heroes.hourly());
console.log("heroes.hourly(date,modifier)", heroes.hourly(new Date(),10), heroes.hourly(new Date(),10));
console.log("heroes.daily()", heroes.daily(), heroes.daily());
console.log("heroes.daily(date,modifier)", heroes.daily(new Date(),10), heroes.daily(new Date(),10));
console.log("heroes.static()", heroes.static('A'), heroes.static('A'));
console.log("heroes.static(modifier)", heroes.static('B'), heroes.static('B',10));
