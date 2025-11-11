function greet(name:string):void{
    console.log("hello "+name)
}
let hi:(name:string) => string = function(name){
    return "welcome "+name;
}
let h2:(name:string) => void = (name)=>{
    console.log("welcome "+name)
}
greet("manoj");
hi("manoj")
h2("manoj")