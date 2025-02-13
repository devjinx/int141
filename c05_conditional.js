// conditional exercise
 
/*
write a function evenOdd that receives a value and returns
- true if the value is an even number
- false if the value is an odd number
- null otherwise (e.g., a number but not an integer, not a number, Infinity).
*/
function evenOdd(value) {
    return Number.isInteger(value) ? value % 2 == 0 : null;
}
 
function testEvenOdd() {
    console.log("Test evenOdd function ------------------")
    function t(c) { console.log(c, ":", evenOdd(c)); }
    t(5); t(6); t(5.8);
    t(undefined); t(Infinity); t(NaN); t(null);
    t("5"); t(""); t("no"); t(false); t(true);
}
testEvenOdd()
/*
write a function middle that receives three values and returns the middle value
among the three values based on comparison.
- firstly, all values must be either all strings or all numbers; otherwise returns null –AND–
- secondly, if there are duplicate values, any of the duplicate values can be returned –AND–
- avoiding duplicate logic.
*/
function middle(value) {
 
}
/*
write a function ticketPrice that receives age, dayOfWeek, and timeOfDay
and returns the ticket price according to the following criteria:
- Full price for an adult is ฿160. Children (age <=7) are free (0). Seniors (age >= 60) pay half price.
- Weekend rate (dayOfWeek is "Saturday" or "Sunday") adds 10% to the price (except children)
- Daytime (timeOfDay <= 16) on Weekday (not Weekend) get a discount of ฿20 for each person (except children).
*/
function ticketPrice(age, dayOfWeek, timeOfDay) {
    if (typeof age != "number" || isNaN(age) || age <= 0) return NaN;
    if (typeof dayOfWeek != "String") return NaN;
    if (typeof timeOfDay != "number" || isNaN(timeOfDay)
        || timeOfDay < 0 || timeOfDay >= 24) return NaN;
    if (age <= 7) return 0;
    var price = 160;
    if (age >= 60) price /=2
    if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
        price *= 1.1;
    } else if (timeOfDay <= 16) {
        price -= 20;
    }
    return price;
}
/*
write a function days that receives three numbers which are day, month, and year
and return the number of days from 1 Jan on that same year to that day.
*/
function days(day, month, year) {
    if (!Number.isInteger(day) || !Number.isNumber(month) || !Number.isNumber(year)
       || day < 1 || day > 31 || month < 1 || month > 12 || year < 1)
        return NaN;
    if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11))
        return NaN;
    var daysInFeb = year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ? 29 : 28;
 
    if (month == 2 && day > daysInFeb) return NaN;
 
    var out = day;
    if (month > 1) out += 31;
    if (month > 2) out += daysInFeb;
    if (month > 3) out += 31;
    if (month > 4) out += 30;
    if (month > 5) out += 31;
    if (month > 6) out += 30;
    if (month > 7) out += 31;
    if (month > 8) out += 31;
    if (month > 9) out += 30;
    if (month > 10) out += 31;
    if (month > 11) out += 30;
}
 
function testDays(){
    console.log("test Days into the year ---------")
    function t(day, month, year) { console.log(`${day}/${month}/${year} :`, days(day, month, year)); }
    t(1,1,2000); // 1
    t(30,1,2000); // 30
    t(1,2,2000); // 32
    t(28,2,2000); // 31+ 2859
    t(29,2,2000); // 31 2960
    t(29,2,2001); // Na
    t(1,3,2000); // 31+29+1=61
}