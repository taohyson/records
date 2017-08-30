//第一个人听到教官指令，才开始报数并通知下一个人报数

function personA(){
    console.log('1到');
    personB()
}


function personB(){
    console.log('2到');
    personC()
}

function personC(){
    console.log('3到');
    personD()
}

function personD(){
    console.log('4到');
    personE()
}

function personE(){
    console.log('5到');
    return true;
}

function startBaoshu(){
    console.log('开始报数！');
    personA();
}

startBaoshu();

var over = personE();
if(over){
    console.log('OK，这很好！');
}


/*
这个结果正常，但personE报了2次，因为在赋值的时候也被执行了
*/