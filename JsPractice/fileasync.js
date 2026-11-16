const file=require('fs');

const data = file.readFile('saurabh.txt','utf-8',(abhi,data )=>{
    console.log(data);
});

console.log('this is after reading the file');




