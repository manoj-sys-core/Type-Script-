// 1
const programminglangs:string[] = ["javascript","java","python"];
// 2
const student1:[string,number,boolean] = ["manoj",19,true];
// 
enum weekdays {
    day1= "monday",
    day2 ="tuesday",
    day3 ="wednesday",
    day4 ="thrusday",
    day5 ="friday",
}
let today:weekdays = weekdays.day1;
console.log(today)
// 4
let hello:(name:string) =>void = (name)=>{
    console.log("welcome "+name)
}
hello("manoj")
// 5
let typ:unknown="ts";
typ = 9;
console.log(typeof typ)