// practice for lesson 4 2017-08-27

var flag = 1 ;

function personA(){
    console.log(flag);
    flag ++
}

//personA();

function personB(){
    console.log(flag+1);
    personA()
}

personB();
console.log(flag);