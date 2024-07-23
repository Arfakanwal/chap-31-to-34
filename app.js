//Q#1 Date
var today = new Date();
document.write(today+"<br/>"+"<br/>");
//Q#2 current month
var monthsName =["january","february","marhc","april","may","june","july","august","september","october","novemnber","december"] ;
var currentMonthIndex = today.getMonth();
var currentMonthName = monthsName[currentMonthIndex];
alert("The current month is "+currentMonthName );
//Q#3 first three letters
var days =["Sun","Mon","Tue","Wedn","Thurs","Fri","Sat"];
var currentDay = today.getDay();
var dayInShort= days[currentDay];
alert("Today is "+dayInShort)
//Q#4 funday
if(today.getDay()===0 ||today.getDay()===6){
    document.write("Today is fun day ")
}else{
    document.write("Today is working day"+"<br/>"+"<br/>")
}
//Q#5 fifteen days of month
var today = new Date();
var day = today.getDate();
if(day < 16){
    document.write("First fifteen days of the month")
}else{
    ("Last days of the month")
}
//Q#6 millisecond
var millisecondsSinceEpoch = today.getTime();
var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000);
document.write("Milliseconds since midnight, Jan. 1, 1970: " + millisecondsSinceEpoch+"<br/>"+"<br/>");
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch+"<br/>"+"<br/>");
//Q#7 AM/PM
var hours = today.getHours();
if(hours < 12){
    alert("It's AM")
}else{
    alert("It's PM")
}
//Q#8 later date
var laterDate = new Date(2023,11 ,30);
document.write(laterDate+"<br/>"+"<br/>");
//Q#9 Ramadan 
var ramadanStartDate = new Date(2024,2,12 );
var today = new Date();
var timeDifference = today-ramadanStartDate;
var pastDays = Math.floor(timeDifference/(1000*60*60*24));
alert("Number of days past since 1st Ramadan: "+pastDays);
//Q# 10 elapsed
var startOf2015 = new Date(2015,0, 1);
var timeDiff = today-startOf2015;
var secondElapsed = Math.floor(timeDiff/1000);
document.write("On reference date "+startOf2015+" seconds had passed since beginning of 2015");
//Q# 11 