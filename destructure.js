var user = ["name",true,1]

console.log(user[0]);

var [name,isStudent,rollNo] = user;
console.log(rollNo);

var users = {
    name:"name",
    age:20,
    isStudent:true
}


var {name,age,isStudent} = users;
console.log(age);
