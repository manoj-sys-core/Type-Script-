// primitive types
const username:string = "manoj";
const age:number = 18;
const istrue:boolean = false;
let val:null;
let ans:undefined;
// arrays
let marks:number[] = [1,2,3,4,5,6];
let total:number = marks.reduce((e,a)=>e+a,0)
console.log(total)
let high:number =Math.max(...marks)
console.log(high)
// tuple
let id:[string,number,boolean] = ["manoj",892,true]
console.log(id)
// any and unknown
let tp:unknown="ts";
tp = 9;
console.log(typeof tp)
let a:any = 17
a ="an"
console.log(typeof a)
// tp.toUpperCase(); ❌ Error: Object is of type 'unknown'
if (typeof tp === "string") {
  console.log(tp.toUpperCase()); // ✅ Works safely
}
