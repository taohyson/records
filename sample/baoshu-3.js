//第一个人听到教官指令，才开始报数并通知下一个人报数

function personA(){
    var start = startBaoshu();
    if (start){
        console.log('1到');
        personB()
    };
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
    return true
    //personA();
}

startBaoshu();

var over = personE();
if(over){
    console.log('OK，这很好！');
}


/*

C:\Users\juanjuanliu\ljj_js\hellojs\sample>node baoshu-3.js
开始报数！
5到
OK，这很好！

这个执行结果是为什么？错在哪里？
*/