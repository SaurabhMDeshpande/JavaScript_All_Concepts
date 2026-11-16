const file=require('fs');

const data = file.readFileSync('saurabh.txt','utf-8');
console.log(data);

console.log('this is after reading the file');