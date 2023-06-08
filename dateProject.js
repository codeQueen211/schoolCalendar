let date= new Date();
let Year= date.getFullYear();
let Hour=date.getHours();
let Min=date.getMinutes();
let Sec=date.getSeconds();
let WeekDays=["SUN", "MON", "TUE","WED","THU","FRI","SAT"];
let WeekDay=WeekDays[date.getDay()];
let Months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
let Month=Months[date.getMonth()];

document.querySelector('h2').innerHTML=`${Month} ${date.getDate()} ${Year} ${WeekDay} ${Hour}:${Min}:${Sec}`;
