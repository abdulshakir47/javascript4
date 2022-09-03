// Promises has 2 states either it will be fullfilled or not fullfilled

const uno = () =>{
    return "I am One";
}

const dos = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am Two");
        },3000)

    })
 
}

const tres = () =>{
        return "I am three";
}

const callMe = async () =>{
    var one = uno()
    console.log(one);
    var two =await dos()
    console.log(two);
    var three = tres();
    console.log(three);
}

callMe()