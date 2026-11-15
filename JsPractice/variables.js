//1. var: old way
//ES6
//scope: var
//functionally/locallly + global scope

var x = 10;
function test(){
    var y = 20;
}
console.log(x);

// var cant accessess outside if 
var pop = "hi js";
function rel(){
    var top = "hello js";
}
rel();
console.log(pop);
//console.log(top);


// var redeclaration is allowed
var browser = "chrome";
// initializing variable and reassigning variable
var browser = "firefox";
// initializing variable
browser = "edge";
console.log(browser);

//////
var g;
console.log(g);//undefined is the default value
g = "hello world";
console.log(g);

//issue with var: we cannot use the flag which used in first line
var flag = "hey naveen";
var t1 = 4;
if(t1 > 3){
    var flag = "hey tom";
}
console.log(flag);

//let :
//scope: block scoped
//{}

let m = "hey naveen";
let time = 4;
if(time >  3){
    let mesg = "hey hw r u?";
    console.log(mesg);
}
//console.log(mesg);
console.log(m);

// can update value but cannot redeclare
let len = 4;
len = 5;
console.log(len);

//const:
const mg = "hey naveen";
//mg = "hey tom";
console.log(mg);

const days = 7;
//days = 10;
console.log(100 * days);

//
const p;
console.log(p);

let t;
console.log(t);

var t2 ;
console.log(t2);


var hh = 10;
var hh = 20;

