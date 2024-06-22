var prompt = require('prompt-sync')();
const age=prompt("Enter your age");
if(age>13){
console.log("yes");
}else{
    console.log("no");
}



// function callback(){
//     console.log('calling the call back function')
// }

// const add=function(a,b,prim){
//     var res=a+b
//     console.log('result='+res)
//     prim()
// }
// add(3,4,function(){
//     console.log('add complete')
// })
// add(8,4,() =>console.log('add complete'))



// var fs=require('fs')
// var os=require('os')
// var user=os.userInfo();
// console.log(user)
// console.log(user.username)




// fs.appendFile('greeting.txt','Hiii '+ user.username +'!\n',()=>{
//     console.log('File created');
// })
// console.log(fs)



// const notes=require('./notes.js')
// console.log('server started')
// var age=notes.age;
// console.log(age)
// var res=notes.addNum(age,18)
// console.log("Result="+res)



// var _=require('lodash')
// var data=['person','person',1,2,4,1,2,'name','age','2']
// var filter=_.uniq(data)
// console.log(filter)
// console.log(_.isString(true))



// const jsonString='{"name":"Suma","age":30,"city":"NewYork"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);

// const obj={name:"Alice",age:23}
// const jsonstring=JSON.stringify(obj)
// console.log(jsonstring)

// console.log(typeof jsonstring)
