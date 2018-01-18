const square = function (x){
    return x*x;
};

const square2 = (x) =>{
    return x*x;
};


const add =function(a,b){
    console.log(arguments);
    return a+b;
};

const add2 =(a,b) =>{
    
    return a+b;
};


console.log(square2(8));